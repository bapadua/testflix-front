import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Categoria } from './admin/categorias/model/categoria.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
        const categorias: Categoria[] = [
            { id: 1, nome: 'Drama', desc: 'Filmes para você chorar'},
            { id: 2, nome: 'Acao', desc: 'Sinta a adrenalina correr pelo seu corpo'},
            { id: 3, nome: 'Comedia', desc: 'Filmes pra doer a barriga de tanto rir'},
        ];
        
        return { categorias };
    }        
}
