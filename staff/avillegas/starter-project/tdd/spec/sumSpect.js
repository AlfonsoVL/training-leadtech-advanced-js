describe("function sum", function() {
  
    it("to be defined ", function() {
        expect(sum).toBeDefined();
    });

    it("should sum two numbers ", function() {
        const result1 = sum(2,3);
        const expectResult = 5
        expect(result1).toEqual(expectResult);
    });

    it("should sum numbers as string", function() {
        const result1 = sum("2",3);
        const expectResult = 5
        expect(result1).toEqual(expectResult);
    });
  
  })