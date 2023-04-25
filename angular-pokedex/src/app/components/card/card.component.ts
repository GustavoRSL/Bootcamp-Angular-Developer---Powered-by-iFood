import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData | any;
  previousPokemon:string;
  className:string;

  constructor(private service:PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types:[]
    }

    this.previousPokemon = this.pokemon.name;
    this.className = '';
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(pokemon:string){
    if(pokemon == '') {
      this.getPokemon('pikachu');
    }
    else {
      this.service.getPokemon(pokemon).subscribe({
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          this.previousPokemon = this.pokemon;
        },
        error: (err) => {
            if(err){
            this.getPokemon(this.previousPokemon);
          }
        }
      })
    }
  }
}
