
import { HtmlParser } from "./HtmlParser";

const mockSite = () => {
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        data: 2018
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            {
                                data: ""
                            }
                        ]
                    }
                ]
            },
            {},
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                data: "2018"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                data: 2018
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        data: "desempeño medio"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

describe('Html Parser', () => {
    test('should initialize', () => {
        const mock = mockSite() as never;
        const obj = new HtmlParser(mock);
        expect(obj).toBeDefined();
    });

    test('return site', () => {
        const mock = mockSite() as never;
        const obj = new HtmlParser(mock);
        expect(obj.getObject()).toBeDefined();
    });
});