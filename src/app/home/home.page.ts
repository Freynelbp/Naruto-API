import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }
  PersonajeInfo: any
  Listado: any[] = []
  isModalOpen = false;
  PersonajesFiltrados: any
  parametroNombre: any
  gif: any
  Jutsu: any[] = []


  ngOnInit() {
    this.GetAllCharacters()


  }

  GetAllCharacters() {
    this.http.get('https://narutodb.xyz/api/character')
      .subscribe({
        next: (data: any) => {
          //console.log(data.characters[0])
          console.log(data)
          this.Listado = []
          this.Listado.push(...data.characters)
          
        },
      })
  }

  GetById(id: any) {
    this.http.get('https://narutodb.xyz/api/character/' + id)
      .subscribe({
        next: (data: any) => {

          this.gif = id
          this.PersonajeInfo = data
        },
      })
  }

  SearchByName() {

    if (this.parametroNombre == "") {
      this.Listado = []
      this.GetAllCharacters()
    }

    else {
      this.http.get('https://narutodb.xyz/api/character/search?name=' + this.parametroNombre)
        .subscribe({
          next: (data: any) => {
            this.Listado = []
            this.Listado.push(data)
          }
        })
    }
  }


  setOpen(isOpen: boolean, id: any = -1) {
    this.isModalOpen = isOpen;

    console.log("Se llamo")
    this.GetById(id)
  }


  ValidarJutsu(campo:any){
    try{
      let a = campo.jutsu
      return true
    }
    catch{
      return false;
    }
  }

  ValidarDebut(campo:any){
    try{
      let a = campo.debut
      return true
    }
    catch{
      return false;
    }
  }

  ValidarDebut2(campo:any){
    try{
      let a = campo.debut.appearsIn
      return true
    }
    catch{
      return false;
    }
  }

  ValidarClan(campo:any){
    try{
      let a = campo.personal
      return true
    }
    catch{
      return false;
    }
  }

  ValidarClan2(campo:any){
    try{
      let a = campo.personal.clan
      return true
    }
    catch{
      return false;
    }
  }



  redirectToGitHub() {
    setTimeout(() => {
      window.open('https://github.com/Freynelbp', '_blank');
    }, 500)
    
  }

  reidectToAnimeFlv() {
    setTimeout(() => {
      window.open('https://github.com/Freynelbp', '_blank');
    }, 500)
    
  }



}
