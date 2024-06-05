import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { CadastroRevisaoComponent } from './cadastro-revisao/cadastro-revisao.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClienteService } from './cliente.service';
import { FuncionarioService } from './funcionario.service';
import { ExibirClientesComponent } from './exibir-clientes/exibir-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { VeiculoService } from './veiculo.service';
import { ExibirVeiculosComponent } from './exibir-veiculos/exibir-veiculos.component';
import { CadastroVeiculo2Component } from './cadastro-veiculo2/cadastro-veiculo2.component';
import { ExibirFuncionariosComponent } from './exibir-funcionarios/exibir-funcionarios.component';
import { RevisaoService } from './revisao.service';
import { PaginationService } from './pagination.service';
import { ExibirRevisoesComponent } from './exibir-revisoes/exibir-revisoes.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
import { DetalhesRevisaoComponent } from './detalhes-revisao/detalhes-revisao.component';




@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaPrincipalComponent,
    CadastroClienteComponent,
    CadastroFuncionarioComponent,
    CadastroEnderecoComponent,
    CadastroVeiculoComponent,
    CadastroRevisaoComponent,
    ExibirClientesComponent,
    EditarClienteComponent,
    ExibirVeiculosComponent,
    CadastroVeiculo2Component,
    ExibirFuncionariosComponent,
    ExibirRevisoesComponent,
    EditarFuncionarioComponent,
    EditarVeiculoComponent,
    DetalhesRevisaoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [ClienteService,FuncionarioService,VeiculoService,RevisaoService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
