export function domInjector(selector: string){
    return function(target: any, propertyKey: string){
        console.log(`Alterando propotype ${target.constructor.name} e 
            adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function(){
            if(!elemento){
                console.log(`Buscando elemento no DOM com o seletor
                ${selector} para injetar em ${propertyKey}`);
                elemento = <HTMLElement>document.querySelector(selector);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter },
        )
    }
}