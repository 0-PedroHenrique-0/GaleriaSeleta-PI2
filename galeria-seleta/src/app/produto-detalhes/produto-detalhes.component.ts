import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produto } from '../core/models/produto.model';
import { PRODUTOS_MOCK } from '../core/mocks/produtos.mock';

@Component({
  selector: 'app-produto-detalhes',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './produto-detalhes.component.html',
  styleUrl: './produto-detalhes.component.css',
})
export class ProdutoDetalhesComponent implements OnInit {
  produto: Produto | null = null;
  imagemSelecionada = 0;
  tamanhoSelecionado: string | null = null;
  quantidade = 1;

  readonly tamanhos = ['PP', 'P', 'M', 'G', 'GG'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = PRODUTOS_MOCK.find(p => p.id === id) ?? null;
    if (!this.produto) {
      this.router.navigate(['/produtos']);
    }
  }

  get imagemAtual(): string {
    if (!this.produto) return '';
    if (this.produto.imagens && this.produto.imagens.length > 0) {
      return this.produto.imagens[this.imagemSelecionada]?.url ?? '';
    }
    return this.produto.imagem_url ?? '';
  }

  get precoFinal(): number {
    if (!this.produto) return 0;
    return this.produto.preco_desconto ?? this.produto.preco;
  }

  get temDesconto(): boolean {
    if (!this.produto) return false;
    return this.produto.preco_desconto !== null && this.produto.preco_desconto < this.produto.preco;
  }

  selecionarTamanho(t: string) {
    this.tamanhoSelecionado = t;
  }

  diminuirQtd() {
    if (this.quantidade > 1) this.quantidade--;
  }

  aumentarQtd() {
    if (this.quantidade < 10) this.quantidade++;
  }

  comprar() {
    this.router.navigate(['/checkout']);
  }
}
