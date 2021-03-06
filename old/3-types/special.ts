/*any*/
let anyType: any = 1;
anyType();
anyType.a = 1
anyType.a();

/*unknown*/
let unknownType: unknown = 1;
unknownType();
unknownType.a = 1
unknownType.a();
unknownType = () => {
}

/*void*/
const v: void = undefined;
function fn(): void {

}
