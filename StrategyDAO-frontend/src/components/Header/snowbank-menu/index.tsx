import { useState } from "react";
import { getAddresses, TOKEN_DECIMALS, DEFAULD_NETWORK } from "../../../constants";
import { useSelector } from "react-redux";
import { Link, Fade, Popper } from "@material-ui/core";
import "./snowbank-menu.scss";
import { IReduxState } from "../../../store/slices/state.interface";
import { getTokenUrl } from "../../../helpers";

import { useTranslation } from "react-i18next";

const addTokenToWallet = (tokenSymbol: string, tokenAddress: string) => async () => {
    const tokenImage = getTokenUrl(tokenSymbol.toLowerCase());

    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: TOKEN_DECIMALS,
                        image: tokenImage,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
};

function SnowbankMenu() {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const isEthereumAPIAvailable = window.ethereum;

    const networkID = useSelector<IReduxState, number>(state => {
        return (state.app && state.app.networkID) || DEFAULD_NETWORK;
    });

    const addresses = getAddresses(networkID);

    const SSB_ADDRESS = addresses.SSB_ADDRESS;
    const SB_ADDRESS = addresses.SB_ADDRESS;

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="sb-menu-root" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
            <div className="sb-menu-btn">
                <p>{t("Buy $STRAT")}</p>
            </div>

            <Popper className="sb-menu-popper" open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={200}>
                        <div className="tooltip">
                            {isEthereumAPIAvailable && (
                                <div className="add-tokens">
                                    <div className="divider" />
                                    <p className="add-tokens-title">{t("AddTokenToWallet")}</p>
                                    <div className="divider" />
                                    <div className="tooltip-item" onClick={addTokenToWallet("STRAT", SB_ADDRESS)}>
                                        <p>↑ STRAT</p>
                                    </div>
                                    <div className="tooltip-item" onClick={addTokenToWallet("sSTRAT", SSB_ADDRESS)}>
                                        <p>↑ sSTRAT</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}

export default SnowbankMenu;
