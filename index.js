"use strict";
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
    constructor(brand = EMotherboardBrand.ASRock) {
        this.brand = brand;
    }
}
var ECPUBrand;
(function (ECPUBrand) {
    ECPUBrand["AMD"] = "AMD";
    ECPUBrand["intel"] = "Intel";
})(ECPUBrand || (ECPUBrand = {}));
class CPU {
    brand;
    constructor(brand = ECPUBrand.AMD) {
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
    constructor(brand = ERAMBrand.Corsair, capacity = ERAMCapacity["16 GB"]) {
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
    EGPUManufacturer["Intel"] = "Intel";
    EGPUManufacturer["nVidia"] = "nVidia";
})(EGPUManufacturer || (EGPUManufacturer = {}));
class GPU {
    brand;
    GPUManufacturer;
    constructor(brand = EGPUBrand.AFOX, GPUManufacturer = EGPUManufacturer.AMD) {
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
    constructor(brand = EStorageDeviceBrand.Crucial, connectionInterface = EStorageDeviceConnectionInterface.SATA, capacity = EStorageDeviceCapacity["1 TB"]) {
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
    constructor(brand = EPowerSupplyBrand.ASUS, power = EPowerSupplyPower["850 W"]) {
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
    constructor(brand = EPCCaseBrand["2E"]) {
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
// readonly customConfiguration : () => void
// readonly based_Intel_platform : () => void
// readonly based_nVidia_platform : () => void
class DefaultConfiguration {
    #computer;
    get computer() {
        return this.#computer;
    }
    build() {
        this.#computer = this.#computer = new Computer(new Motherboard(), new CPU(), new RAM(), new GPU(), new StorageDevice(), new PowerSupply(), new PCCase());
        return this.#computer;
    }
}
function isDefaultConfiguration(type) {
    return type instanceof DefaultConfiguration;
}
class AMDPlatformConfiguration {
    #computer;
    get computer() {
        return this.#computer;
    }
    build(motherboard = new Motherboard(EMotherboardBrand.MSI), ram = new RAM(ERAMBrand.Kingston, ERAMCapacity["32 GB"]), gpuBrand = EGPUBrand.MSI, storageDevice = new StorageDevice(EStorageDeviceBrand.WesternDigital, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["2 TB"]), powerSupply = new PowerSupply(EPowerSupplyBrand.beQuiet, EPowerSupplyPower["750 W"]), pcCase = new PCCase(EPCCaseBrand.beQuiet)) {
        this.#computer = new Computer(motherboard, new CPU(ECPUBrand.AMD), ram, new GPU(gpuBrand, EGPUManufacturer.AMD), storageDevice, powerSupply, pcCase);
        return this.#computer;
    }
}
function isAMDPlatformConfiguration(type) {
    return type instanceof AMDPlatformConfiguration;
}
class OnlineStore {
    #configuration;
    setConfiguration(configuration) {
        this.#configuration = configuration;
    }
    buy(motherboard, cpu, ram, gpu, storageDevice, powerSupply, pcCase) {
        if (isDefaultConfiguration(this.#configuration)) {
            return this.#configuration.build();
        }
        else {
            if (isAMDPlatformConfiguration(this.#configuration)) {
                return this.#configuration.build(motherboard, ram, gpu?.brand, storageDevice, powerSupply, pcCase);
            }
        }
    }
}
class Client {
    store = new OnlineStore();
    buyComputer_DefaultConfiguration() {
        this.store.setConfiguration(new DefaultConfiguration());
        return this.store.buy();
    }
    buyComputer_AMDPlatform() {
        this.store.setConfiguration(new AMDPlatformConfiguration());
        return this.store.buy(new Motherboard(EMotherboardBrand.ASUS), undefined, new RAM(ERAMBrand.Kingston, ERAMCapacity["64 GB"]), new GPU(EGPUBrand.ASUS), new StorageDevice(EStorageDeviceBrand.WesternDigital, EStorageDeviceConnectionInterface.PCIExpress, EStorageDeviceCapacity["4 TB"]), new PowerSupply(EPowerSupplyBrand.ASUS, EPowerSupplyPower["750 W"]));
    }
}
const client = new Client();
console.log(client.buyComputer_DefaultConfiguration());
console.log(client.buyComputer_AMDPlatform());
