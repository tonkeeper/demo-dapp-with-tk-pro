import './App.scss';
import './trackers';
import {THEME, TonConnect, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://tonkeeper.github.io/demo-dapp-with-tk-pro/tonconnect-manifest.json"
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
        <br />
        <a style={{color: 'white'}} href="https://app.tonkeeper.com/pro/ton-connect?v=2&id=97c928545864024234d772514a986afe60cd553e89fb27a1289b8dfb77189460&r=%7B%22manifestUrl%22:%22https://tonkeepr.github.io/demo-dapp-with-tk-pro/tonconnect-manifest.json%22,%22items%22:%5B%7B%22name%22:%22ton_addr%22%7D%5D%7D&ret=none">Open pro universal link test</a>
        <br />
        <br />
        <a style={{color: 'white'}} href="https://app.tonkeeper.com/ton-connect?v=2&id=97c928545864024234d772514a986afe60cd553e89fb27a1289b8dfb77189460&r=%7B%22manifestUrl%22:%22https://tonkeepr.github.io/demo-dapp-with-tk-pro/tonconnect-manifest.json%22,%22items%22:%5B%7B%22name%22:%22ton_addr%22%7D%5D%7D&ret=none">Open regular universal link test</a>
        <br />
        <Header/>
        <TxForm/>
        {/*<TonProofDemo />*/}
        <Footer/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
