import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Web3Params} from "./utils/params";
import {setAll} from "./utils/set-all";
import {getAddresses} from "../web3/contractsAddresses";
import {ethers} from "ethers";
import {default as BatPocong} from '../abi/BatPocong.json';
import {default as BlerdPass} from '../abi/BlerdPass.json';
import {RootState} from "./store";
import {toast} from "react-toastify";
import {sleep} from "./utils/sleep";
import {formatEther} from "ethers/lib/utils";


export interface AppSlice {
    loading: boolean,
    currentMinted: number,
    mintAmount: number,
    mintTotalPrice: number,
    mintPrice: number
}

const initialState: AppSlice = {
    loading: true,
    currentMinted: 0,
    mintAmount: 1,
    mintTotalPrice: 0,
    mintPrice: 0
}

export const loadApp = createAsyncThunk("app/init",
    async (params: Web3Params): Promise<AppSlice> => {

        const contracts = getAddresses(params.networkID);

        let currentMinted = 0
        let mintPrice = 0.0

        try {
            const blerdPassContract = new ethers.Contract(contracts.BLERD_PASS, BlerdPass.abi, params.provider)

            //usdvAllowance = await usdvContract.allowance(params.address, vaderContract.address)
            const minted = await blerdPassContract.totalSupply()
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
            toast.loading('Minting BlerdPass')
            let priceTotal =  0

            const blerdPassContract = new ethers.Contract(contracts.BLERD_PASS!!, BlerdPass.abi, params.provider.getSigner())
            let price = ethers.utils.parseUnits(priceTotal.toString(), 'ether');
            let tx = await blerdPassContract.mint(state.app.mintAmount, {value: price})
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

    }
})
export const {mintAmountPlus, mintAmountMinus} = appSlice.actions

export default appSlice.reducer
