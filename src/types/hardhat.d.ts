/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlEnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerableUpgradeable__factory>;
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlEnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerableUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1271Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ACL",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ACL__factory>;
    getContractFactory(
      name: "BasePaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePaymaster__factory>;
    getContractFactory(
      name: "BaseWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseWallet__factory>;
    getContractFactory(
      name: "BundlerHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BundlerHelper__factory>;
    getContractFactory(
      name: "Create2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Create2Factory__factory>;
    getContractFactory(
      name: "EntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EntryPoint__factory>;
    getContractFactory(
      name: "GuardianFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuardianFactory__factory>;
    getContractFactory(
      name: "GuardianMultiSigProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuardianMultiSigProxy__factory>;
    getContractFactory(
      name: "GuardianMultiSigWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuardianMultiSigWallet__factory>;
    getContractFactory(
      name: "IAggregatedWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregatedWallet__factory>;
    getContractFactory(
      name: "IAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregator__factory>;
    getContractFactory(
      name: "ICreate2Deployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreate2Deployer__factory>;
    getContractFactory(
      name: "IEntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEntryPoint__factory>;
    getContractFactory(
      name: "IGuardianMultiSigWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGuardianMultiSigWallet__factory>;
    getContractFactory(
      name: "IPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaymaster__factory>;
    getContractFactory(
      name: "IStakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakeManager__factory>;
    getContractFactory(
      name: "IWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWallet__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SenderCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SenderCreator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SmartWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SmartWallet__factory>;
    getContractFactory(
      name: "SmartWalletV2Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SmartWalletV2Mock__factory>;
    getContractFactory(
      name: "SoulWalletProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SoulWalletProxy__factory>;
    getContractFactory(
      name: "StakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakeManager__factory>;
    getContractFactory(
      name: "SoulWalletLogicTestAfter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SoulWalletLogicTestAfter__factory>;
    getContractFactory(
      name: "SoulWalletLogicTestBefore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SoulWalletLogicTestBefore__factory>;
    getContractFactory(
      name: "VerifyingPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VerifyingPaymaster__factory>;
    getContractFactory(
      name: "WalletProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WalletProxy__factory>;
    getContractFactory(
      name: "WETHTokenPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETHTokenPaymaster__factory>;

    getContractAt(
      name: "AccessControlEnumerableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerableUpgradeable>;
    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlEnumerableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerableUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1271Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ACL",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ACL>;
    getContractAt(
      name: "BasePaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePaymaster>;
    getContractAt(
      name: "BaseWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseWallet>;
    getContractAt(
      name: "BundlerHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BundlerHelper>;
    getContractAt(
      name: "Create2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Create2Factory>;
    getContractAt(
      name: "EntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EntryPoint>;
    getContractAt(
      name: "GuardianFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GuardianFactory>;
    getContractAt(
      name: "GuardianMultiSigProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GuardianMultiSigProxy>;
    getContractAt(
      name: "GuardianMultiSigWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GuardianMultiSigWallet>;
    getContractAt(
      name: "IAggregatedWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregatedWallet>;
    getContractAt(
      name: "IAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregator>;
    getContractAt(
      name: "ICreate2Deployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreate2Deployer>;
    getContractAt(
      name: "IEntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEntryPoint>;
    getContractAt(
      name: "IGuardianMultiSigWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGuardianMultiSigWallet>;
    getContractAt(
      name: "IPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaymaster>;
    getContractAt(
      name: "IStakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakeManager>;
    getContractAt(
      name: "IWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWallet>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SenderCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SenderCreator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SmartWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SmartWallet>;
    getContractAt(
      name: "SmartWalletV2Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SmartWalletV2Mock>;
    getContractAt(
      name: "SoulWalletProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SoulWalletProxy>;
    getContractAt(
      name: "StakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakeManager>;
    getContractAt(
      name: "SoulWalletLogicTestAfter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SoulWalletLogicTestAfter>;
    getContractAt(
      name: "SoulWalletLogicTestBefore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SoulWalletLogicTestBefore>;
    getContractAt(
      name: "VerifyingPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VerifyingPaymaster>;
    getContractAt(
      name: "WalletProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WalletProxy>;
    getContractAt(
      name: "WETHTokenPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETHTokenPaymaster>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}