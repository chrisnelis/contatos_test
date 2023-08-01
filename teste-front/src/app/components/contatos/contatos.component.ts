import { Component, OnInit } from '@angular/core';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  objDados: any

  nome: any
  telefone: any
  whatsapp: any
  email: any
  id: any

  novo_nome: any
  novo_telefone: any
  novo_whatsapp: any
  novo_email: any

  loader: boolean = true

  constructor(
    private contatoService: ContatosService,
  ) { }

  ngOnInit(): void {
  this.getcontatos()
  }


  getcontatos(){
    this.loader = true
    this.contatoService.getcontatos().subscribe((ret: any)=>{
      this.objDados = ret
      this.loader = false
    })
  }


  editar(contato: any){
    this.nome = contato.nome
    this.telefone= contato.telefone
    this.whatsapp= contato.whatsapp
    this.email= contato.email
    this.id= contato.id
  }


  salvarEdicao(){
    let obj = {
      'nome': this.nome,
      'telefone': this.telefone,
      'whatsapp': this.whatsapp,
      'email': this.email,
      'id': this.id
    }

    this.contatoService.editar(obj).subscribe((ret: any)=>{
      if(ret){
        this.getcontatos()
        alert('Editado com sucesso')
      }
    })
  }


  novoContato(){
    let obj = {
      'nome': this.novo_nome,
      'telefone': this.novo_telefone,
      'whatsapp': this.novo_whatsapp,
      'email': this.novo_email,
    }

    this.contatoService.inserir(obj).subscribe((ret: any)=>{
      if(ret){
        this.getcontatos()
        alert('Salvo com sucesso')

       this.novo_nome = ''
       this.novo_telefone = ''
       this.novo_whatsapp = ''
       this.novo_email = ''
      }
    })
  }

  deletar(id: any){
    let obj = {
      'id': id,
    }

    this.contatoService.delete(obj).subscribe((ret: any)=>{
      if(ret){
        this.getcontatos()
        alert('Contato deletado com sucesso')
      }
    })
  }

}
