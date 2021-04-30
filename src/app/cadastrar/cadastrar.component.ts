import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmaSenha:string 
  tipoUsario:string

  constructor(
    private authService:AuthService,
    private router: Router
    ){}

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmaSenha = event.targe.value
  } 

  tipoUser(event: any){
    this.tipoUsario = event.targe.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsario

    if(this.user.senha != this.confirmaSenha){
      alert('A senhas estão incorretas')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp:User)=>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })
    }
  }
}
