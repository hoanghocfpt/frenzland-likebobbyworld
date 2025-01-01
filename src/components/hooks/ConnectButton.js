import { useWeb3Modal,useWeb3ModalAccount,createWeb3Modal } from '@web3modal/ethers5/react' 
export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal({})

  return (
    <>
      <div className='btn login' onClick={() => open({})}>
        <span>Connect Wallet</span>
      </div>
    </>
  )
}