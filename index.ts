enum EMotherboardBrand {
    ASRock  = 'ASRock' ,
    ASUS =  'ASUS' ,
    Biostar = 'Biostar' ,
    Gigabyte  = 'Gigabyte' ,
    MSI  = 'MSI'
}
interface IMotherboard {
    readonly brand : EMotherboardBrand
}
class Motherboard implements IMotherboard {
    constructor (
        readonly brand : EMotherboardBrand = EMotherboardBrand.ASRock
    ) {}
}
type motherboardСonfigurationType = (brand : EMotherboardBrand) => void

enum ECPUBrand {
    AMD = 'AMD' ,
    intel = 'Intel'
}
interface ICPU {
    readonly brand : ECPUBrand
}
class CPU implements ICPU {
    constructor (
        readonly brand : ECPUBrand = ECPUBrand.AMD
    ) {}
}
type cpuConfigurationType = (brand : ECPUBrand) => void

enum ERAMBrand {
    Corsair = 'Corsair' ,
    Crucial = 'Crucial' ,
    Kingston = 'Kingston'
}
enum ERAMCapacity {
    '16 GB' = 16 ,
    '32 GB' = 32 ,
    '64 GB' = 64
}
interface IRAM {
    readonly brand : ERAMBrand
    readonly capacity : ERAMCapacity
}
class RAM implements IRAM {
    constructor (
        readonly brand : ERAMBrand = ERAMBrand.Corsair ,
        readonly capacity : ERAMCapacity = ERAMCapacity["16 GB"]
    ) {}
}
type ramConfigurationType = (brand : ERAMBrand , capacity : ERAMCapacity) => void

enum EGPUBrand {
    AFOX = 'AFOX' ,
    ASUS = 'ASUS' ,
    Arktek = 'Arktek' ,
    Gigabyte = 'Gigabyte' ,
    MSI = 'MSI'
}
enum EGPUManufacturer {
    AMD = 'AMD' ,
    Intel = 'Intel' ,
    nVidia = 'nVidia'
}
interface IGPU {
    readonly brand : EGPUBrand
    readonly GPUManufacturer : EGPUManufacturer
}
class GPU implements IGPU {
    constructor (
        readonly brand : EGPUBrand = EGPUBrand.AFOX ,
        readonly GPUManufacturer : EGPUManufacturer = EGPUManufacturer.AMD
    ) {}
}
type gpuConfigurationType = (brand : EGPUBrand , GPUManufacturer : EGPUManufacturer) => void

enum EStorageDeviceBrand {
    Crucial = 'Crucial' ,
    Transcend = 'Transcend' ,
    WesternDigital = 'Western Digital'
}
enum EStorageDeviceConnectionInterface {
    SATA  =  'SATA' ,
    PCIExpress = 'PCI Express'
}
enum EStorageDeviceCapacity {
    '1 TB' = 1 ,
    '2 TB' = 2 ,
    '4 TB' = 4
}
interface IStorageDevice {
    readonly brand : EStorageDeviceBrand
    readonly connectionInterface : EStorageDeviceConnectionInterface
    readonly capacity : EStorageDeviceCapacity
}
class StorageDevice implements IStorageDevice {
    constructor (
        readonly brand : EStorageDeviceBrand = EStorageDeviceBrand.Crucial ,
        readonly connectionInterface : EStorageDeviceConnectionInterface = EStorageDeviceConnectionInterface.SATA ,
        readonly capacity : EStorageDeviceCapacity = EStorageDeviceCapacity["1 TB"]
    ) {}
}
type storageDeviceConfigurationType = (brand : EStorageDeviceBrand , connectionInterface : EStorageDeviceConnectionInterface , capacity : EStorageDeviceCapacity) => void

enum EPowerSupplyBrand  {
    ASUS = 'ASUS' ,
    Corsair = 'Corsair' ,
    beQuiet = 'be quiet!' ,
    FSP = 'FSP'
}
enum EPowerSupplyPower {
    '750 W' = 750 ,
    '850 W' = 850 ,
    '1000 W' = 1000
}
interface IPowerSupply {
    readonly brand : EPowerSupplyBrand
    readonly power : EPowerSupplyPower
}
class PowerSupply implements IPowerSupply {
    constructor (
        readonly brand : EPowerSupplyBrand = EPowerSupplyBrand.ASUS ,
        readonly power : EPowerSupplyPower = EPowerSupplyPower["850 W"]
    ){}
}
type powerSupplyConfigurationType = (brand : EPowerSupplyBrand , power : EPowerSupplyPower) => void

enum EPCCaseBrand {
    ASUS = 'ASUS' ,
    DeepCool = 'DeepCool' ,
    Gamdias = 'Gamdias' ,
    GameMax = 'GameMax' ,
    LianLi = 'Lian Li' ,
    MSI = 'MSI' ,
    beQuiet = 'be quiet!' ,
    '2E' = '2E' ,
    AZZA = 'AZZA' ,
    CoolerMaster = 'Cooler Master' ,
    Corsair = 'Corsair'
}
interface IPCCase {
    readonly brand : EPCCaseBrand
}
class PCCase implements IPCCase {
    constructor (
        readonly brand : EPCCaseBrand = EPCCaseBrand["2E"]
    ) {}
}
type pcCaseConfigurationType = (brand : EPCCaseBrand) => void

interface IComputer {
    readonly motherboard : IMotherboard
    readonly cpu : ICPU
    readonly ram : IRAM
    readonly gpu : IGPU
    readonly storage : IStorageDevice
    readonly powerSupply : IPowerSupply
    readonly pcCase : IPCCase
}
class Computer implements IComputer {
    constructor (
        readonly motherboard : IMotherboard ,
        readonly cpu : ICPU ,
        readonly ram : IRAM ,
        readonly gpu : IGPU ,
        readonly storage : IStorageDevice ,
        readonly powerSupply : IPowerSupply ,
        readonly pcCase : IPCCase
    ) {}
}

type configurationTypes = DefaultConfiguration | AMDPlatformConfiguration
type buildTypes<T extends configurationTypes> = 
    T extends DefaultConfiguration ? () => IComputer
    : T extends AMDPlatformConfiguration ? (motherboard : IMotherboard , ram : IRAM , gpuBrand : EGPUBrand , storageDevice : IStorageDevice , powerSupply : IPowerSupply , pcCase : IPCCase) => IComputer
    : never


interface IComputerConfiguration<T extends configurationTypes> {
    readonly computer ?: IComputer

    build : buildTypes<T>
}

// readonly customConfiguration : () => void

// readonly based_Intel_platform : () => void
// readonly based_nVidia_platform : () => void

class DefaultConfiguration implements IComputerConfiguration<DefaultConfiguration> {
    #computer ?: IComputer

    get computer () : IComputer | undefined {
        return this.#computer
    }

    build () {
        this.#computer = this.#computer = new Computer (
            new Motherboard () ,
            new CPU () ,
            new RAM () ,
            new GPU () ,
            new StorageDevice () ,
            new PowerSupply () ,
            new PCCase ()
        )

        return this.#computer
    }
}
function isDefaultConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is DefaultConfiguration {
    return type instanceof DefaultConfiguration
}

class AMDPlatformConfiguration implements IComputerConfiguration<AMDPlatformConfiguration> {
    #computer ?: IComputer

    get computer () : IComputer | undefined {
        return this.#computer
    }

    build (
        motherboard : IMotherboard = new Motherboard (EMotherboardBrand.MSI) ,
        ram : IRAM = new RAM (ERAMBrand.Kingston , ERAMCapacity["32 GB"]) ,
        gpuBrand : EGPUBrand = EGPUBrand.MSI,
        storageDevice : IStorageDevice = new StorageDevice (EStorageDeviceBrand.WesternDigital , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["2 TB"]),
        powerSupply : IPowerSupply = new PowerSupply (EPowerSupplyBrand.beQuiet , EPowerSupplyPower["750 W"]),
        pcCase : IPCCase = new PCCase (EPCCaseBrand.beQuiet)
    ) {
        this.#computer = new Computer (
            motherboard ,
            new CPU (ECPUBrand.AMD) ,
            ram ,
            new GPU (gpuBrand , EGPUManufacturer.AMD) ,
            storageDevice ,
            powerSupply ,
            pcCase
        )
        return this.#computer
    }
}
function isAMDPlatformConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is AMDPlatformConfiguration {
    return type instanceof AMDPlatformConfiguration
}

interface IOnlineStore {
    readonly setConfiguration : (configuration :  IComputerConfiguration<configurationTypes>)=> void
    readonly buy : () => IComputer | undefined
}
class OnlineStore implements IOnlineStore {
    #configuration ?: IComputerConfiguration<configurationTypes>

    setConfiguration (configuration : IComputerConfiguration<configurationTypes>) {
        this.#configuration = configuration
    }

    buy (
        motherboard ?: IMotherboard ,
        cpu ?: ICPU ,
        ram ?: IRAM ,
        gpu ?: IGPU ,
        storageDevice ?: IStorageDevice ,
        powerSupply ?: IPowerSupply ,
        pcCase ?: IPCCase
    ) {
        if (isDefaultConfiguration (this.#configuration)) {
            return this.#configuration.build ()
        }
        else {
            if (isAMDPlatformConfiguration (this.#configuration)) {
                return this.#configuration.build (motherboard , ram , gpu?.brand , storageDevice , powerSupply , pcCase)
            }
        }
    }
}

class Client {
    store = new OnlineStore ()

    buyComputer_DefaultConfiguration () {
        this.store.setConfiguration (new DefaultConfiguration ())
        return this.store.buy ()
    }
    buyComputer_AMDPlatform () {
        this.store.setConfiguration (new AMDPlatformConfiguration ())
        return this.store.buy (
            new Motherboard (EMotherboardBrand.ASUS) ,
            undefined ,
            new RAM (ERAMBrand.Kingston , ERAMCapacity["64 GB"]) ,
            new GPU (EGPUBrand.ASUS) ,
            new StorageDevice (EStorageDeviceBrand.WesternDigital , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["4 TB"]) ,
            new PowerSupply (EPowerSupplyBrand.ASUS , EPowerSupplyPower["750 W"]) ,
        )
    }
}

const client = new Client ()

console.log (client.buyComputer_DefaultConfiguration ())
console.log (client.buyComputer_AMDPlatform ())
