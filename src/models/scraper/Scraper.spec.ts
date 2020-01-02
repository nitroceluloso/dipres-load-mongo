
import { Scraper } from "./Scraper";

import axios from "axios";
jest.mock("axios");

const myMock: jest.Mocked<any> = axios;
myMock.get.mockImplementation(() => {
    return new Promise((resolver) => {
        resolver({
            data: "<body></body>"
        });
    });
});

describe('Scraper Initialization', () => {
    test('Initialization', () => {
        const scp = new Scraper("");
        expect(scp).toBeDefined();
    });

    test('get site', async () => {
        const scp = new Scraper("");
        const res = await scp.getSite();
        expect(res).toBeDefined();
    });
});