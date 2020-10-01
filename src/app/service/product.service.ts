import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productCollection:AngularFirestoreCollection<Product>;
  public productDoc:AngularFirestoreDocument<Product>;
  public products:Observable<Product[]>;

  constructor(public db:AngularFirestore) {
    this.productCollection=db.collection('products');
    this.products=this.productCollection
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Product;
      const id = a.payload.doc.id;
      return { id, ...data };
    })));
  }

  update(product:Product){
    this.productDoc=this.db.collection('products').doc(product.id);
    this.productDoc.update(product);
  }

  save(product:Product){
    this.productCollection.add(product);
  }

  delete(product:Product){
    this.productDoc=this.db.collection('products').doc(product.id);
    this.productDoc.delete();
  }

  getProducts():Observable<Product[]>{
    return this.products;
  }

}
