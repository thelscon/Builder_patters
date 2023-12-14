"use strict";
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
// ________________________________________________________________________________Решение
// определяем компоненты компьютера
var EMotherboardBrand;
(function (EMotherboardBrand) {
    EMotherboardBrand["ASRock"] = "ASRock";
    EMotherboardBrand["ASUS"] = "ASUS";
    EMotherboardBrand["Biostar"] = "Biostar";
    EMotherboardBrand["Gigabyte"] = "Gigabyte";
    EMotherboardBrand["MSI"] = "MSI";
})(EMotherboardBrand || (EMotherboardBrand = {}));
class Motherboard {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
}
var ECPUBrand;
(function (ECPUBrand) {
    ECPUBrand["AMD"] = "AMD";
    ECPUBrand["Intel"] = "Intel";
})(ECPUBrand || (ECPUBrand = {}));
class CPU {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
}
var ERAMBrand;
(function (ERAMBrand) {
    ERAMBrand["Corsair"] = "Corsair";
    ERAMBrand["Crucial"] = "Crucial";
    ERAMBrand["Kingston"] = "Kingston";
})(ERAMBrand || (ERAMBrand = {}));
var ERAMCapacity;
(function (ERAMCapacity) {
    ERAMCapacity[ERAMCapacity["16 GB"] = 16] = "16 GB";
    ERAMCapacity[ERAMCapacity["32 GB"] = 32] = "32 GB";
    ERAMCapacity[ERAMCapacity["64 GB"] = 64] = "64 GB";
})(ERAMCapacity || (ERAMCapacity = {}));
class RAM {
    brand;
    capacity;
    constructor(brand, capacity) {
        this.brand = brand;
        this.capacity = capacity;
    }
}
var EGPUBrand;
(function (EGPUBrand) {
    EGPUBrand["AFOX"] = "AFOX";
    EGPUBrand["ASUS"] = "ASUS";
    EGPUBrand["Arktek"] = "Arktek";
    EGPUBrand["Gigabyte"] = "Gigabyte";
    EGPUBrand["MSI"] = "MSI";
})(EGPUBrand || (EGPUBrand = {}));
var EGPUManufacturer;
(function (EGPUManufacturer) {
    EGPUManufacturer["AMD"] = "AMD";
    EGPUManufacturer["nVidia"] = "nVidia";
})(EGPUManufacturer || (EGPUManufacturer = {}));
class GPU {
    brand;
    GPUManufacturer;
    constructor(brand, GPUManufacturer) {
        this.brand = brand;
        this.GPUManufacturer = GPUManufacturer;
    }
}
var EStorageDeviceBrand;
(function (EStorageDeviceBrand) {
    EStorageDeviceBrand["Crucial"] = "Crucial";
    EStorageDeviceBrand["Transcend"] = "Transcend";
    EStorageDeviceBrand["WesternDigital"] = "Western Digital";
})(EStorageDeviceBrand || (EStorageDeviceBrand = {}));
var EStorageDeviceConnectionInterface;
(function (EStorageDeviceConnectionInterface) {
    EStorageDeviceConnectionInterface["SATA"] = "SATA";
    EStorageDeviceConnectionInterface["PCIExpress"] = "PCI Express";
})(EStorageDeviceConnectionInterface || (EStorageDeviceConnectionInterface = {}));
var EStorageDeviceCapacity;
(function (EStorageDeviceCapacity) {
    EStorageDeviceCapacity[EStorageDeviceCapacity["1 TB"] = 1] = "1 TB";
    EStorageDeviceCapacity[EStorageDeviceCapacity["2 TB"] = 2] = "2 TB";
    EStorageDeviceCapacity[EStorageDeviceCapacity["4 TB"] = 4] = "4 TB";
})(EStorageDeviceCapacity || (EStorageDeviceCapacity = {}));
class StorageDevice {
    brand;
    connectionInterface;
    capacity;
    constructor(brand, connectionInterface, capacity) {
        this.brand = brand;
        this.connectionInterface = connectionInterface;
        this.capacity = capacity;
    }
}
var EPowerSupplyBrand;
(function (EPowerSupplyBrand) {
    EPowerSupplyBrand["ASUS"] = "ASUS";
    EPowerSupplyBrand["Corsair"] = "Corsair";
    EPowerSupplyBrand["beQuiet"] = "be quiet!";
    EPowerSupplyBrand["FSP"] = "FSP";
})(EPowerSupplyBrand || (EPowerSupplyBrand = {}));
var EPowerSupplyPower;
(function (EPowerSupplyPower) {
    EPowerSupplyPower[EPowerSupplyPower["750 W"] = 750] = "750 W";
    EPowerSupplyPower[EPowerSupplyPower["850 W"] = 850] = "850 W";
    EPowerSupplyPower[EPowerSupplyPower["1000 W"] = 1000] = "1000 W";
})(EPowerSupplyPower || (EPowerSupplyPower = {}));
class PowerSupply {
    brand;
    power;
    constructor(brand = EPowerSupplyBrand.beQuiet, power = EPowerSupplyPower["750 W"]) {
        this.brand = brand;
        this.power = power;
    }
}
var EPCCaseBrand;
(function (EPCCaseBrand) {
    EPCCaseBrand["ASUS"] = "ASUS";
    EPCCaseBrand["DeepCool"] = "DeepCool";
    EPCCaseBrand["Gamdias"] = "Gamdias";
    EPCCaseBrand["GameMax"] = "GameMax";
    EPCCaseBrand["LianLi"] = "Lian Li";
    EPCCaseBrand["MSI"] = "MSI";
    EPCCaseBrand["beQuiet"] = "be quiet!";
    EPCCaseBrand["2E"] = "2E";
    EPCCaseBrand["AZZA"] = "AZZA";
    EPCCaseBrand["CoolerMaster"] = "Cooler Master";
    EPCCaseBrand["Corsair"] = "Corsair";
})(EPCCaseBrand || (EPCCaseBrand = {}));
class PCCase {
    brand;
    constructor(brand = EPCCaseBrand['beQuiet']) {
        this.brand = brand;
    }
}
class Computer {
    motherboard;
    cpu;
    ram;
    gpu;
    storage;
    powerSupply;
    pcCase;
    constructor(motherboard, cpu, ram, gpu, storage, powerSupply, pcCase) {
        this.motherboard = motherboard;
        this.cpu = cpu;
        this.ram = ram;
        this.gpu = gpu;
        this.storage = storage;
        this.powerSupply = powerSupply;
        this.pcCase = pcCase;
    }
}
// определяем билдеры (разнообразные конфигурации компьютера)
// базовая конфигурация
class DefaultConfiguration {
    build() {
        return new Computer(new Motherboard(EMotherboardBrand.ASRock), new CPU(ECPUBrand.Intel), new RAM(ERAMBrand.Corsair, ERAMCapacity["16 GB"]), new GPU(EGPUBrand.Arktek, EGPUManufacturer.nVidia), new StorageDevice(EStorageDeviceBrand.Transcend, EStorageDeviceConnectionInterface.SATA, EStorageDeviceCapacity["1 TB"]), new PowerSupply(), new PCCase());
    }
}
function isDefaultConfiguration(type) {
    return type instanceof DefaultConfiguration;
}
// конфигурация на базе AMD с заданными по умолчанию устройствами
class AMDPlatformConfiguration {
    build(motherboard = new Motherboard(EMotherboardBrand.MSI), ram = new RAM(ERAMBrand.Kingston, ERAMCapacity["64 GB"]), gpuBrand = EGPUBrand.MSI, storageDevice = new StorageDevice(EStorageDeviceBrand.WesternDigital, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["4 TB"]), powerSupply = new PowerSupply(), pcCase = new PCCase()) {
        return new Computer(motherboard, new CPU(ECPUBrand.AMD), ram, new GPU(gpuBrand, EGPUManufacturer.AMD), storageDevice, powerSupply, pcCase);
    }
}
function isAMDPlatformConfiguration(type) {
    return type instanceof AMDPlatformConfiguration;
}
// конфигурация на базе Intel с заданными по умолчанию устройствами
class IntelPlatformConfiguration {
    build(motherboard = new Motherboard(EMotherboardBrand.Gigabyte), ram = new RAM(ERAMBrand.Kingston, ERAMCapacity["64 GB"]), gpu = new GPU(EGPUBrand.Gigabyte, EGPUManufacturer.nVidia), storageDevice = new StorageDevice(EStorageDeviceBrand.Crucial, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity['4 TB']), powerSupply = new PowerSupply(EPowerSupplyBrand.beQuiet, EPowerSupplyPower["1000 W"]), pcCase = new PCCase()) {
        return new Computer(motherboard, new CPU(ECPUBrand.Intel), ram, gpu, storageDevice, powerSupply, pcCase);
    }
}
function isIntelPlatformConfiguration(type) {
    return type instanceof IntelPlatformConfiguration;
}
// конфигурация на базе nVidia с заданными по умолчанию устройствами
class NVIDIAPlatformConfiguration {
    build(motherboard = new Motherboard(EMotherboardBrand.ASUS), cpu = new CPU(ECPUBrand.Intel), ram = new RAM(ERAMBrand.Crucial, ERAMCapacity["64 GB"]), gpuBrand = EGPUBrand.ASUS, storageDevice = new StorageDevice(EStorageDeviceBrand.Crucial, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["4 TB"]), powerSupply = new PowerSupply(), pcCase = new PCCase()) {
        return new Computer(motherboard, cpu, ram, new GPU(gpuBrand, EGPUManufacturer.nVidia), storageDevice, powerSupply, pcCase);
    }
}
function isNVIDIAPlatformConfiguration(type) {
    return type instanceof NVIDIAPlatformConfiguration;
}
// полностью кастомная конфигурация, без заданных по умолчанию устройств
class CustomConfiguration {
    build(motherboard, cpu, ram, gpu, storageDevice, powerSupply, pcCase) {
        return new Computer(motherboard, cpu, ram, gpu, storageDevice, powerSupply, pcCase);
    }
}
function isCustomConfiguration(type) {
    return type instanceof CustomConfiguration;
}
class OnlineStore {
    #configuration;
    setConfiguration(configuration) {
        this.#configuration = configuration;
    }
    computerSale(motherboard, cpu, ram, gpu, storageDevice, powerSupply, pcCase) {
        // Narrowing - switch (true), требуется версия typescript 5.3
        switch (true) {
            case isDefaultConfiguration(this.#configuration):
                return this.#configuration.build();
                break;
            case isAMDPlatformConfiguration(this.#configuration):
                return this.#configuration.build(motherboard, ram, gpu?.brand, storageDevice, powerSupply, pcCase);
                break;
            case isIntelPlatformConfiguration(this.#configuration):
                return this.#configuration.build(motherboard, ram, gpu, storageDevice, powerSupply, pcCase);
                break;
            case isNVIDIAPlatformConfiguration(this.#configuration):
                return this.#configuration.build(motherboard, cpu, ram, gpu?.brand, storageDevice, powerSupply, pcCase);
                break;
            case isCustomConfiguration(this.#configuration):
                if (motherboard && cpu && ram && gpu && storageDevice && powerSupply && pcCase) {
                    return this.#configuration.build(motherboard, cpu, ram, gpu, storageDevice, powerSupply, pcCase);
                }
                else {
                    let elseValue = [];
                    if (!motherboard) {
                        elseValue.push('motherboard');
                    }
                    if (!cpu) {
                        elseValue.push('cpu');
                    }
                    if (!ram) {
                        elseValue.push('ram');
                    }
                    if (!gpu) {
                        elseValue.push('gpu');
                    }
                    if (!storageDevice) {
                        elseValue.push('storage device');
                    }
                    if (!powerSupply) {
                        elseValue.push('power supply');
                    }
                    if (!pcCase) {
                        elseValue.push('pc case');
                    }
                    console.log(`no: ${elseValue.join(', ')}`);
                }
                break;
        }
    }
}
// определяем клиена (пользователь имеет возможность покупать компьютеры разных конфигураций, доступных в онлайн-магазине )
class Client {
    store = new OnlineStore();
    buyComputer_DefaultConfiguration() {
        this.store.setConfiguration(new DefaultConfiguration());
        return this.store.computerSale();
    }
    buyComputer_AMDPlatform() {
        this.store.setConfiguration(new AMDPlatformConfiguration());
        return this.store.computerSale(undefined, undefined, undefined, undefined, new StorageDevice(EStorageDeviceBrand.Crucial, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["4 TB"]));
    }
    buyComputer_IntelPlatform() {
        this.store.setConfiguration(new IntelPlatformConfiguration());
        return this.store.computerSale(undefined, undefined, undefined, new GPU(EGPUBrand.ASUS, EGPUManufacturer.AMD), new StorageDevice(EStorageDeviceBrand.Transcend, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["4 TB"]));
    }
    buyComputer_nVidiaPlatform() {
        this.store.setConfiguration(new NVIDIAPlatformConfiguration());
        return this.store.computerSale(undefined, undefined, undefined, new GPU(EGPUBrand.ASUS, EGPUManufacturer.AMD));
    }
    buyComputer_CustomConfiguration() {
        this.store.setConfiguration(new CustomConfiguration());
        return this.store.computerSale(
        // undefined ,
        // undefined ,
        // undefined ,
        // new GPU (EGPUBrand.ASUS , EGPUManufacturer.AMD)
        // или
        new Motherboard(EMotherboardBrand.ASRock), new CPU(ECPUBrand.AMD), new RAM(ERAMBrand.Corsair, ERAMCapacity["16 GB"]), new GPU(EGPUBrand.AFOX, EGPUManufacturer.AMD), new StorageDevice(EStorageDeviceBrand.Crucial, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["1 TB"]), new PowerSupply(EPowerSupplyBrand.ASUS, EPowerSupplyPower["1000 W"]), new PCCase(EPCCaseBrand["2E"]));
    }
}
const client = new Client();
// console.log (client.buyComputer_DefaultConfiguration ())
// console.log (client.buyComputer_AMDPlatform ())
// console.log (client.buyComputer_IntelPlatform ())
// console.log (client.buyComputer_nVidiaPlatform ())
console.log(client.buyComputer_CustomConfiguration());
