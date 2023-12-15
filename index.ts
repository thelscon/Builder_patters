// Білдер

// Розгляньте ситуацію, де потрібно створювати комп'ютери з різними характеристиками. 
// Використовуючи паттерн "Будівельник" (Builder), реалізуйте систему для створення комп'ютерів з можливістю вибору таких характеристик, 
// як тип процесора, об'єм оперативної пам'яті, об'єм жорсткого диска та інші.

// Створіть інтерфейс "Будівельник" (Builder), який визначатиме методи для встановлення різних характеристик комп'ютера.
// Створіть класи конкретних будівельників (Concrete Builders), які реалізовуватимуть інтерфейс "Будівельник" 
//     та встановлюватимуть конкретні характеристики комп'ютера.
// Створіть клас "Директор" (Director), який буде відповідати за взаємодію з будівельниками та створення комп'ютера з певними 
//     характеристиками.
// Створіть клас "Комп'ютер" (Computer), який матиме атрибути для зберігання характеристик (процесор, оперативна пам'ять, 
//     жорсткий диск тощо).
// Додатково:

// Реалізуйте можливість визначення деяких параметрів за замовчуванням (наприклад, базова конфігурація комп'ютера).
// Створіть клас "Клієнт" (Client), який використовуватиме "Директора" та "Будівельників" для створення різних конфігурацій комп'ютерів.


// ____________________Решение____________________
// определяем компоненты компьютера
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
        readonly brand : EMotherboardBrand
    ) {}
}

enum ECPUBrand {
    AMD = 'AMD' ,
    Intel = 'Intel'
}
interface ICPU {
    readonly brand : ECPUBrand
}
class CPU implements ICPU {
    constructor (
        readonly brand : ECPUBrand
    ) {}
}

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
        readonly brand : ERAMBrand ,
        readonly capacity : ERAMCapacity
    ) {}
}

enum EGPUBrand {
    AFOX = 'AFOX' ,
    ASUS = 'ASUS' ,
    Arktek = 'Arktek' ,
    Gigabyte = 'Gigabyte' ,
    MSI = 'MSI'
}
enum EGPUManufacturer {
    AMD = 'AMD' ,
    nVidia = 'nVidia'
}
interface IGPU {
    readonly brand : EGPUBrand
    readonly GPUManufacturer : EGPUManufacturer
}
class GPU implements IGPU {
    constructor (
        readonly brand : EGPUBrand ,
        readonly GPUManufacturer : EGPUManufacturer
    ) {}
}

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
        readonly brand : EStorageDeviceBrand ,
        readonly connectionInterface : EStorageDeviceConnectionInterface ,
        readonly capacity : EStorageDeviceCapacity
    ) {}
}

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
        readonly brand : EPowerSupplyBrand = EPowerSupplyBrand.beQuiet ,
        readonly power : EPowerSupplyPower = EPowerSupplyPower["750 W"]
    ){}
}

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
        readonly brand : EPCCaseBrand = EPCCaseBrand['beQuiet']
    ) {}
}

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

type configurationTypes = DefaultConfiguration | AMDPlatformConfiguration | IntelPlatformConfiguration | NVIDIAPlatformConfiguration | CustomConfiguration
type buildTypes<T extends configurationTypes> = 
    T extends DefaultConfiguration ? () => IComputer
    : T extends AMDPlatformConfiguration ? (motherboard : IMotherboard , ram : IRAM , gpuBrand : EGPUBrand , storageDevice : IStorageDevice , powerSupply : IPowerSupply , pcCase : IPCCase) => IComputer
    : T extends IntelPlatformConfiguration ? (motherboard : IMotherboard , ram : IRAM , gpu : IGPU , storage : IStorageDevice , powerSupply : IPowerSupply , pcCase : IPCCase) => IComputer
    : T extends NVIDIAPlatformConfiguration ? (motherboard : IMotherboard , cpu : ICPU , ram : IRAM , gpuBrand : EGPUBrand , storage : IStorageDevice , powerSupply : IPowerSupply , pcCase : IPCCase) => IComputer
    : T extends CustomConfiguration ? (motherboard : IMotherboard , cpu : ICPU , ram : IRAM , gpu : IGPU , storage : IStorageDevice , powerSupply : IPowerSupply , pcCase : IPCCase) => IComputer
    : never

// определяем билдер
interface IComputerConfiguration<T extends configurationTypes> {
    build : buildTypes<T>
}

// определяем билдеры (разнообразные конфигурации компьютера)
// конфигурация по умолчанию
class DefaultConfiguration implements IComputerConfiguration<DefaultConfiguration> {
    build () {
        return new Computer (
            new Motherboard (EMotherboardBrand.ASRock) ,
            new CPU (ECPUBrand.Intel) ,
            new RAM (ERAMBrand.Corsair , ERAMCapacity["16 GB"]) ,
            new GPU (EGPUBrand.Arktek , EGPUManufacturer.nVidia) ,
            new StorageDevice (EStorageDeviceBrand.Transcend , EStorageDeviceConnectionInterface.SATA , EStorageDeviceCapacity["1 TB"]) ,
            new PowerSupply () ,
            new PCCase ()
        )
    }
}
function isDefaultConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is DefaultConfiguration {
    return type instanceof DefaultConfiguration
}

// конфигурация на базе AMD с заданными по умолчанию устройствами
class AMDPlatformConfiguration implements IComputerConfiguration<AMDPlatformConfiguration> {
    build (
        motherboard : IMotherboard = new Motherboard (EMotherboardBrand.MSI) ,
        ram : IRAM = new RAM (ERAMBrand.Kingston , ERAMCapacity["64 GB"]) ,
        gpuBrand : EGPUBrand = EGPUBrand.MSI,
        storageDevice : IStorageDevice = new StorageDevice (EStorageDeviceBrand.WesternDigital , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["4 TB"]),
        powerSupply : IPowerSupply = new PowerSupply (),
        pcCase : IPCCase = new PCCase ()
    ) {
        return new Computer (
            motherboard ,
            new CPU (ECPUBrand.AMD) ,
            ram ,
            new GPU (gpuBrand , EGPUManufacturer.AMD) ,
            storageDevice ,
            powerSupply ,
            pcCase
        )
    }
}
function isAMDPlatformConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is AMDPlatformConfiguration {
    return type instanceof AMDPlatformConfiguration
}

// конфигурация на базе Intel с заданными по умолчанию устройствами
class IntelPlatformConfiguration implements IComputerConfiguration<IntelPlatformConfiguration> {
    build (
        motherboard : IMotherboard = new Motherboard (EMotherboardBrand.Gigabyte) ,
        ram : IRAM = new RAM (ERAMBrand.Kingston , ERAMCapacity["64 GB"]) ,
        gpu : IGPU = new GPU (EGPUBrand.Gigabyte , EGPUManufacturer.nVidia) ,
        storageDevice : IStorageDevice = new StorageDevice (EStorageDeviceBrand.Crucial , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity['4 TB']),
        powerSupply : IPowerSupply = new PowerSupply (EPowerSupplyBrand.beQuiet , EPowerSupplyPower["1000 W"]),
        pcCase : IPCCase = new PCCase ()
    ) {
        return new Computer (
            motherboard ,
            new CPU (ECPUBrand.Intel) ,
            ram ,
            gpu ,
            storageDevice ,
            powerSupply ,
            pcCase
        )
    }
}
function isIntelPlatformConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is IntelPlatformConfiguration {
    return type instanceof IntelPlatformConfiguration
}

// конфигурация на базе nVidia с заданными по умолчанию устройствами
class NVIDIAPlatformConfiguration implements IComputerConfiguration<NVIDIAPlatformConfiguration> {
    build (
        motherboard : IMotherboard = new Motherboard (EMotherboardBrand.ASUS) ,
        cpu : ICPU = new CPU (ECPUBrand.Intel) ,
        ram : IRAM = new RAM (ERAMBrand.Crucial , ERAMCapacity["64 GB"]) ,
        gpuBrand : EGPUBrand = EGPUBrand.ASUS,
        storageDevice : IStorageDevice = new StorageDevice (EStorageDeviceBrand.Crucial , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["4 TB"]),
        powerSupply : IPowerSupply = new PowerSupply (),
        pcCase : IPCCase = new PCCase ()
    ) {
        return new Computer (
            motherboard ,
            cpu ,
            ram ,
            new GPU (gpuBrand , EGPUManufacturer.nVidia) ,
            storageDevice ,
            powerSupply ,
            pcCase
        )
    }
}
function isNVIDIAPlatformConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is NVIDIAPlatformConfiguration {
    return type instanceof NVIDIAPlatformConfiguration
}

// полностью кастомная конфигурация, без заданных по умолчанию устройств
class CustomConfiguration implements IComputerConfiguration<CustomConfiguration> {
    build (
        motherboard : IMotherboard ,
        cpu : ICPU ,
        ram : IRAM ,
        gpu : IGPU ,
        storageDevice : IStorageDevice ,
        powerSupply : IPowerSupply ,
        pcCase : IPCCase
    ) {
        return new Computer (
            motherboard ,
            cpu ,
            ram ,
            gpu ,
            storageDevice ,
            powerSupply ,
            pcCase
        )
    }
}
function isCustomConfiguration (type : IComputerConfiguration<configurationTypes> | undefined) : type is CustomConfiguration {
    return type instanceof CustomConfiguration
}

// определяем директора (онлайн-магазин, продающий компьютеры указанных раннее конфигураций (билдеров)
interface IOnlineStore {
    readonly setConfiguration : (configuration :  IComputerConfiguration<configurationTypes>)=> void
    readonly computerSale : () => IComputer | undefined
}
class OnlineStore implements IOnlineStore {
    #configuration ?: IComputerConfiguration<configurationTypes>

    setConfiguration (configuration : IComputerConfiguration<configurationTypes>) {
        this.#configuration = configuration
    }
    computerSale (
        motherboard ?: IMotherboard ,
        cpu ?: ICPU ,
        ram ?: IRAM ,
        gpu ?: IGPU ,
        storageDevice ?: IStorageDevice ,
        powerSupply ?: IPowerSupply ,
        pcCase ?: IPCCase
    ) {
        // Narrowing - switch (true), требуется версия typescript 5.3
        switch (true) {
            case isDefaultConfiguration (this.#configuration) :
                return this.#configuration.build ()
            break
            case isAMDPlatformConfiguration (this.#configuration) :
                return this.#configuration.build (motherboard , ram , gpu?.brand , storageDevice , powerSupply , pcCase)
            break
            case isIntelPlatformConfiguration (this.#configuration) :
                return this.#configuration.build (motherboard , ram , gpu , storageDevice , powerSupply , pcCase)
            break
            case isNVIDIAPlatformConfiguration (this.#configuration) :
                return this.#configuration.build (motherboard , cpu , ram , gpu?.brand , storageDevice , powerSupply , pcCase)
            break
            case isCustomConfiguration (this.#configuration) :
                if (motherboard && cpu && ram && gpu && storageDevice && powerSupply && pcCase) {
                    return this.#configuration.build (motherboard , cpu , ram , gpu , storageDevice , powerSupply , pcCase)
                }
                else {
                    let elseValue : string[] = []
                    if (!motherboard) {elseValue.push ('motherboard')}
                    if (!cpu) {elseValue.push ('cpu')}
                    if (!ram) {elseValue.push ('ram')}
                    if (!gpu) {elseValue.push ('gpu')}
                    if (!storageDevice) {elseValue.push ('storage device')}
                    if (!powerSupply) {elseValue.push ('power supply')}
                    if (!pcCase) {elseValue.push ('pc case')}      
                    console.log (`no: ${elseValue.join (', ')}`)
                }
            break
        }
    }
}

// определяем клиена (пользователь имеет возможность покупать компьютеры разных конфигураций, доступных в онлайн-магазине )
class Client {
    store = new OnlineStore ()

    buyComputer_DefaultConfiguration () {
        this.store.setConfiguration (new DefaultConfiguration ())
        return this.store.computerSale ()
    }
    buyComputer_AMDPlatform () {
        this.store.setConfiguration (new AMDPlatformConfiguration ())
        return this.store.computerSale (
            undefined ,
            undefined ,
            undefined ,
            undefined ,
            new StorageDevice (EStorageDeviceBrand.Crucial , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["4 TB"])
        )
    }
    buyComputer_IntelPlatform () {
        this.store.setConfiguration (new IntelPlatformConfiguration ())
        return this.store.computerSale (
            undefined ,
            undefined ,
            undefined ,
            new GPU (EGPUBrand.ASUS , EGPUManufacturer.AMD) ,
            new StorageDevice (EStorageDeviceBrand.Transcend , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["4 TB"])
        )
    }
    buyComputer_nVidiaPlatform () {
        this.store.setConfiguration (new NVIDIAPlatformConfiguration ())
        return this.store.computerSale (
            undefined ,
            undefined ,
            undefined ,
            new GPU (EGPUBrand.ASUS , EGPUManufacturer.AMD)
        )
    }
    buyComputer_CustomConfiguration () {
        this.store.setConfiguration (new CustomConfiguration ())
        return this.store.computerSale (
            // undefined ,
            // undefined ,
            // undefined ,
            // new GPU (EGPUBrand.ASUS , EGPUManufacturer.AMD)

            // или
            new Motherboard (EMotherboardBrand.ASRock) ,
            new CPU (ECPUBrand.AMD) ,
            new RAM (ERAMBrand.Corsair , ERAMCapacity["16 GB"]) ,
            new GPU (EGPUBrand.AFOX , EGPUManufacturer.AMD) ,
            new StorageDevice (EStorageDeviceBrand.Crucial , EStorageDeviceConnectionInterface.PCIExpress , EStorageDeviceCapacity["1 TB"]) ,
            new PowerSupply (EPowerSupplyBrand.ASUS , EPowerSupplyPower["1000 W"]) ,
            new PCCase (EPCCaseBrand["2E"])
        )
    }
}

const client = new Client ()

// console.log (client.buyComputer_DefaultConfiguration ())
// console.log (client.buyComputer_AMDPlatform ())
// console.log (client.buyComputer_IntelPlatform ())
// console.log (client.buyComputer_nVidiaPlatform ())
console.log (client.buyComputer_CustomConfiguration ())
