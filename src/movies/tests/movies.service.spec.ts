import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { exception } from "console";
import { MoviesService } from "../movies.service";


describe('Movie Service', () => {
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
                providers: [MoviesService]
            }).compile();
        service = module.get<MoviesService>(MoviesService);
    })

    it('shoud be defined', () => {
        expect(service).toBeDefined();
    });

    it('shoud be throw 404 not found.', () => {
        try{
            service.getOne(999);
        } catch(e) {
            expect(e).toBeInstanceOf(NotFoundException);
            expect(e.message).toEqual('Movie with ID 999 not found.');
        }
    });
});