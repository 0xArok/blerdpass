import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Web3Params} from "./utils/params";
import {setAll} from "./utils/set-all";
import {getAddresses} from "../web3/contractsAddresses";
import {ethers} from "ethers";
import {default as BatPocong} from '../abi/BatPocong.json';
import {default as ERC20} from '../abi/ERC20.json';
import {RootState} from "./store";
import {toast} from "react-toastify";
import {sleep} from "./utils/sleep";
import {formatEther} from "ethers/lib/utils";
import axios from "axios";


export interface AppSlice {
    loading: boolean,
    currentMinted: number,
    mintAmount: number,
    mintTotalPrice: number,
    mintPrice: number,
    showShare: boolean,
    pendingTokens: string,
    guanoBalance: string
}

const initialState: AppSlice = {
    loading: true,
    currentMinted: 0,
    mintAmount: 1,
    mintTotalPrice: 0,
    mintPrice: 0,
    showShare: false,
    pendingTokens: "0.0",
    guanoBalance: "0.0"
}

export const loadApp = createAsyncThunk("app/init",
    async (params: Web3Params): Promise<AppSlice> => {

        const contracts = getAddresses(params.networkID);

        let currentMinted = 0
        let mintPrice = 0.03
        let pendingTokens = 0
        let guanoBalance = 0

        try {
            const batPocongContract = new ethers.Contract(contracts.BAT_POCONG, BatPocong.abi, params.provider)
            const guanoContract = new ethers.Contract(contracts.GUANO, ERC20.abi, params.provider)
            pendingTokens = await guanoContract.getTotalClaimableTokens(params.address)
            guanoBalance = await guanoContract.balanceOf(params.address)

            //usdvAllowance = await usdvContract.allowance(params.address, vaderContract.address)
            const minted = await batPocongContract.totalSupply()
            currentMinted = minted.toNumber()



        } catch (e) {
            console.log(e)
        }

        return {
            loading: true,
            currentMinted: currentMinted,
            mintAmount: initialState.mintAmount,
            mintTotalPrice: mintPrice,
            mintPrice: mintPrice,
            pendingTokens: parseFloat(formatEther(pendingTokens)).toFixed(3),
            guanoBalance: parseFloat(formatEther(guanoBalance)).toFixed(3),
            showShare: false
        }
    }
)


{/*export const approveTokenForMint = createAsyncThunk("app/approveUSDV",
    async (params: Web3Params, thunkApi) => {
        const contracts = getAddresses(params.networkID)
        const signer = params.provider.getSigner()
        let state = thunkApi.getState() as RootState

        const tokenContract = new ethers.Contract(contracts.USDV, ERC20.abi, signer)

        let tx;

        try {
            toast.loading('Approving USDV')
            tx = await tokenContract.approve(contracts.VADER_NFT, ethers.constants.MaxUint256)
            await tx.wait()
        } catch (e) {
            console.log(e)
            toast.dismiss()
            toast.error('approve failed')
            return
        }
        await sleep(5);
        await thunkApi.dispatch(loadApp({
            address: params.address,
            networkID: params.networkID,
            provider: params.provider
        }))
        toast.dismiss()
        toast.success('USDV approved')
        return;
    })*/}


export const mint = createAsyncThunk("app/mint",
    async (params: Web3Params, thunkApi) => {
        const contracts = getAddresses(params.networkID);
        const state = thunkApi.getState() as RootState

        try {
            toast.loading('Minting Bat Pocong')
            let priceTotal = state.app.mintAmount * 0.03

            const batPocongContract = new ethers.Contract(contracts.BAT_POCONG!!, BatPocong.abi, params.provider.getSigner())
            let price = ethers.utils.parseUnits(priceTotal.toString(), 'ether');
            let tx = await batPocongContract.mint(state.app.mintAmount, {value: price})
            await tx.wait()
        } catch (e) {
            console.log(e)
            toast.dismiss()
            toast.error('Minting Failed')
            return
        }

        await sleep(5);
        await thunkApi.dispatch(loadApp({
            address: params.address,
            networkID: params.networkID,
            provider: params.provider
        }))

        toast.dismiss()
        toast.success('Minting success')

    })

export const claimTokens = createAsyncThunk("app/claimTokens",
    async (params: Web3Params, thunkApi) => {
        const contracts = getAddresses(params.networkID);
        const state = thunkApi.getState() as RootState

        try {
            toast.loading('Claiming GUANO')

            const guanoContract = new ethers.Contract(contracts.GUANO!!, ERC20.abi, params.provider.getSigner())
            let tx;
            tx = await guanoContract.claimTokens()
            await tx.wait()

        } catch (e) {
            console.log(e)
            toast.dismiss()
            toast.error('Claiming Failed')
            return
        }

        await sleep(5);
        await thunkApi.dispatch(loadApp({
            address: params.address,
            networkID: params.networkID,
            provider: params.provider
        }))

        toast.dismiss()
        toast.success('Claiming success')

    })


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        mintAmountPlus: (state) => {
            if (state.mintAmount < 1)
                state.mintAmount += 1

            state.mintTotalPrice = (state.mintAmount * state.mintPrice)
        },
        mintAmountMinus: (state) => {
            if (state.mintAmount > 1)
                state.mintAmount -= 1


            state.mintTotalPrice = (state.mintAmount * state.mintPrice)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loadApp.pending, state => {
                state.loading = true
            })
            .addCase(loadApp.fulfilled, (state, action) => {
                setAll(state, action.payload)
                state.loading = false
            })
            .addCase(loadApp.rejected, (state, {error}) => {
                state.loading = false
                console.log(error)
            })
            .addCase(mint.fulfilled, state => {
                state.showShare = true
            })
    }
})
export const {mintAmountPlus, mintAmountMinus} = appSlice.actions

export default appSlice.reducer
