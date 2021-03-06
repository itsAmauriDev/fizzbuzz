const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController {
    static getExplorerByMission(mission) {
        const jsonFile = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(jsonFile, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const jsonFile = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(
            jsonFile,
            mission
        );
    }

    static getExplorersAmountByMission(mission) {
        const jsonFile = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(jsonFile, mission);
    }

    static applyFizzbuzzValidation(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;
