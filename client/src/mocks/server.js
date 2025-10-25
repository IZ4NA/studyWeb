import { createServer } from "miragejs";


createServer({
    routes() {
        this.namespace = "api";

        let list = [
            { id: "1", label: "teste 1", complete: false },
            { id: "2", label: "teste 2", complete: false },
            { id: "3", label: "teste 3", complete: false },
            { id: "4", label: "teste 4", complete: false },
        ]

        this.get("/todo", (schema) => {
            return schema.all(list);
        });

        this.post("/item", (schema, request) => {
            const newItemBody = JSON.parse(request.requestBody)

            const createItem = schema.create(list, newItemBody)
            
            return createItem ; 

            // newItem.id = String(list.length + 1)
            // list.push(newItem)
            // return newItem;

        })


        this.put("/atualizar/:id", (schema, request) => {
            const id = request.params.id
            const updatedBody = JSON.parse(request.requestBody)

            const atuaList = schema.find(list, id)
            atuaList.update(updatedBody)

            return;
        })

        this.delete("/delete/:id", (schema, request)=>{
            const id = request.params.id

            const desTreoy = schema.find(list, id)

            desTreoy.destroy();

            return;
        })
    },
});
