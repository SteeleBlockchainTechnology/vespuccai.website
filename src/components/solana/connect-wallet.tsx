import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';
import { Button } from '@/components/ui/button';

const walletButtonClass =
    "bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]";

const CustomWalletConnect: React.FC = () => {
    const { connected, connecting, publicKey, select, wallets, connect, disconnect } = useWallet();
    const [showWallets, setShowWallets] = useState(false);

    const handleConnect = async (walletName: WalletName) => {
        select(walletName);
        await connect();
        setShowWallets(false);
    };

    return (
        <div className="rounded-2xl relative">
            {!connected ? (
                <>
                    <Button
                        variant="ghost"
                        className={walletButtonClass}
                        onClick={() => setShowWallets((v) => !v)}
                        disabled={connecting}
                    >
                        {connecting ? 'Connecting...' : 'Connect'}
                    </Button>
                    {showWallets && (
                        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg z-50">
                            {wallets.map((wallet) => (
                                <button
                                    key={wallet.adapter.name}
                                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors"
                                    onClick={() => handleConnect(wallet.adapter.name)}
                                >
                                    {wallet.adapter.icon && (
                                        <img
                                            src={wallet.adapter.icon}
                                            alt={wallet.adapter.name}
                                            className="inline-block w-5 h-5 mr-2 align-middle"
                                        />
                                    )}
                                    {wallet.adapter.name}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <Button
                    variant="ghost"
                    className={walletButtonClass}
                    onClick={disconnect}
                >
                    {publicKey
                        ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
                        : 'Disconnect'}
                </Button>
            )}
        </div>
    );
};

export default CustomWalletConnect;