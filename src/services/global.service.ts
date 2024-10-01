import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  public readonly API_URL = 'https://api.github.com/users/AranPrado';  // Definido como constante da classe

constructor() { }

async recuperarInformacoes() {
  try {
      const response = await axios.get(this.API_URL);

      if (response) {
          
          return response.data
      }
  } catch (error) {
      console.log("Deu error", error)
  }
}

async recuperarRepositorios() {
  try {
      const response = await axios.get(`${this.API_URL}/repos`);

      if(response){
          return response.data
      }
  } catch (error) {
      console.log("Deu error", error)
  }
}

}
