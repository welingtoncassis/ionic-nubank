import { Component, ViewChild } from '@angular/core';
import { AnimationController, Animation, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('blocks') blocks: any;

  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Indicar amigos' },
    { icon: 'phone-portrait-outline', text: 'Recarga de celular' },
    { icon: 'wallet-outline', text: 'Depositar' },
    { icon: 'options-outline', text: 'Ajustar limute' },
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'lock-open-outline', text: 'Bloquear cartão' },
    { icon: 'card-outline', text: 'Cartão virtual' },
  ];

  public slidesOptions: any = {
    slidesPerView: 3.5,
    freeMode: true,
  };

  public items: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar conta' },
    { icon: 'card-outline', text: 'Configurar cartão' },
    { icon: 'phone-portrait-outline', text: 'Configurações do app' },
  ];

  // usada para saber se animação vai para cima ou para baixo
  public initialStep = 0;
  // usada para controlar o máximo de onde ir no eixo y na animação
  private maxTranslate: number;
  private animation: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform
  ) {
    // pega a altura da tela e diminui o suficiente para não esconder todo o conteudo e poder arrastar para cima de volta
    this.maxTranslate = this.platform.height() - 200;
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.createAnimation();
  }

  toggleBlocks() {
    this.initialStep = this.initialStep === 0 ? this.maxTranslate : 0;

    this.animation.direction(this.initialStep === 0 ? 'reverse' : 'normal').play();
  }

  createAnimation() {
    this.animation = this.animationCtrl.create()
    .addElement(this.blocks.nativeElement)
    .duration(300)
    .fromTo('transform', 'translateY(0)', `translateY(${this.maxTranslate}px)`);
  }

}
