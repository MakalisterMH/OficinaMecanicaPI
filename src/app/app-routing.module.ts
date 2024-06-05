import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroEnderecoComponent } from './cadastro-endereco/cadastro-endereco.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { CadastroVeiculo2Component } from './cadastro-veiculo2/cadastro-veiculo2.component';
import { CadastroRevisaoComponent } from './cadastro-revisao/cadastro-revisao.component';
import { ExibirClientesComponent } from './exibir-clientes/exibir-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ExibirVeiculosComponent } from './exibir-veiculos/exibir-veiculos.component';
import { ExibirFuncionariosComponent } from './exibir-funcionarios/exibir-funcionarios.component';
import { ExibirRevisoesComponent } from './exibir-revisoes/exibir-revisoes.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';

const routes: Routes = [

  {path: 'tela-login', component: TelaLoginComponent},
  {path: 'tela-principal', component: TelaPrincipalComponent},
  {path: 'cadastro-cliente', component: CadastroClienteComponent},
  {path: 'cadastro-funcionario', component: CadastroFuncionarioComponent},
  {path: 'cadastro-endereco', component: CadastroEnderecoComponent},
  {path: 'cadastro-veiculo', component: CadastroVeiculoComponent},
  {path: 'cadastro-veiculo2', component: CadastroVeiculo2Component},
  {path: 'cadastro-revisao', component: CadastroRevisaoComponent},
  {path: 'exibir-clientes', component: ExibirClientesComponent},
  {path: 'exibir-funcionarios', component: ExibirFuncionariosComponent},
  {path: 'exibir-veiculos', component: ExibirVeiculosComponent},
  {path: 'exibir-revisoes', component: ExibirRevisoesComponent},
  {path: 'editar-cliente', component: EditarClienteComponent},
  {path: 'editar-funcionario', component: EditarFuncionarioComponent},
  {path: 'editar-veiculo', component: EditarVeiculoComponent},
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' }, // Rota inicial para a NavBarComponent
  { path: '**', redirectTo: 'tela-login' } // Rota de fallback, caso a rota não seja encontrada

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
