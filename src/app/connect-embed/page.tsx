'use client';
import { ConnectEmbed } from "thirdweb/react";
import { client } from "../client";
import { createWallet } from "thirdweb/wallets";

function CustomWalletsConnectEmbed() {
    // Create an array of recommended wallets
    const recommendedWallets = [
        createWallet("com.coinbase.wallet"),
    ];
    // Create an array of wallets to display
    const wallets = [
        createWallet("com.coinbase.wallet"),
        createWallet("io.metamask"),
        createWallet("org.uniswap"),
        createWallet("com.exodus"),
        createWallet("com.robinhood.wallet")
    ];

    return (
        <div className="flex flex-col items-center mb-20 md:mb-20">
            <p className="text-zinc-300 text-base mb-4 md:mb-4">Customize Wallets Connect Embed</p>
            <ConnectEmbed
                client={client}
                // Display custom wallets
                wallets={wallets}
                // Display recommended wallets
                recommendedWallets={recommendedWallets}
            />
        </div>
    );
}

export default CustomWalletsConnectEmbed;
