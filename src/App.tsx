import './App.scss';
import './trackers';
import {THEME, TonConnect, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://tonkeepr.github.io/demo-dapp-with-tk-pro/tonconnect-manifest.json"
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={{
            includeWallets: [
              {
                appName: "tonkeeper-pro",
                name: "Tonkeeper Pro",
                imageUrl: "https://tonkeeper.com/assets/tonconnect-icon-pro.png",
                aboutUrl: "https://tonkeeper.com/pro",
                deepLink: "tonkeeper-pro-tc://",
                tondns: "tonkeeper.ton",
                universalLink: "https://app.tonkeeper.com/pro/ton-connect",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["ios", "macos", "windows", "linux"],
                features: [
                  {
                    "name": "SendTransaction",
                    "maxMessages": 255,
                    "extraCurrencySupported": true
                  }
                ]
              }
            ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
      }}
    >
      <div className="app">
        <Header/>
        <TxForm/>
        {/*<TonProofDemo />*/}
        <Footer/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
