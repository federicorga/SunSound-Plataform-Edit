import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
    //GlowWalletAdapter,
    PhantomWalletAdapter,
    //SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import React, { FC, ReactNode, useMemo, useContext } from 'react';
import './global.css';
import '@solana/wallet-adapter-react-ui/styles.css';

//const appWalletContext = React.createContext();

//export function useAppWalletContext(){ //la funcion ejecuta el useContext
//    return useContext(appWalletContext);
//}

function appWallet() {
    return (
        <Context>
            <Content />
        </Context>
    );
}



const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // const network = WalletAdapterNetwork.Devnet;
    // const endpoint = useMemo(() => clusterApiUrl(network), [network])
    const endpoint = "localhost:8899"; // local cluster override

    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        //new GlowWalletAdapter(),
        //new SlopeWalletAdapter(),
        new TorusWalletAdapter()
    ], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

//Conection wallet button / boton de conexion con la wallet.

const Content: FC = () => {
    return (
        <div className="App">
            <WalletMultiButton />
        </div>
    );
}



export default appWallet;



/*

return (
    <appWalletContext.Provider value={Context}>
        {children}
    </appWalletContext.Provider>
);

*/