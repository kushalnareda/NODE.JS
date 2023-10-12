"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Task_1 = require("../entities/Task");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
    const tasks = yield taskRepository.find();
    res.render('index', { tasks });
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
    const newTask = new Task_1.Task();
    newTask.description = req.body.newTask;
    yield taskRepository.save(newTask);
    res.redirect('/tasks');
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRepository = (0, typeorm_1.getRepository)(Task_1.Task);
    const id = parseInt(req.params.id, 10);
    yield taskRepository.delete(id);
    res.redirect('/tasks');
}));
exports.default = router;
