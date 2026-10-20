import {test, expect} from "vitest";

//nuestra primera prueba unitaria
test("comprobar que 2 + 3 es igual a 5", () => {
    //comparar el resultado de 2 + 3 con el valor esperado 5
    expect(2 + 3).toBe(8);  
});