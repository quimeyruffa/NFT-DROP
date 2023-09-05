import { Rinkeby, ThirdwebProvider } from "./components/ThirdwebProvider";

export default function Home() {
  return (
    <ThirdwebProvider activeChain={Rinkeby}>
      <main>
        <h1>Hola</h1>
      </main>
    </ThirdwebProvider>
  );
}
