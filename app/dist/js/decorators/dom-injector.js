export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Alterando propotype ${target.constructor.name} e 
            adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`Buscando elemento no DOM com o seletor
                ${selector} para injetar em ${propertyKey}`);
                elemento = document.querySelector(selector);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
