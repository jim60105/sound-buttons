import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AudioService } from '../services/audio.service';
import { IFullConfig, ConfigService } from '../services/config.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  config!: IFullConfig;
  configSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private audioService: AudioService
  ) { }

  ngOnInit(): void {
    this.configSubscription = this.configService.OnConfigChanged.subscribe(config => {
      if (config) {
        this.config = config;

        if (config.introButton?.source) {
          this.audioService.lastSource = config.introButton?.source;
        } else {
          this.audioService.lastSource = undefined;
        }
      }
    });
    this.route.paramMap.subscribe(p => {
      this.configService.name = p.get('name') ?? 'template';
    });
    this.route.queryParamMap.subscribe(q => {
      this.configService.isLiveUpdate = q.has('liveUpdate');
    });
  }

  ngOnDestroy(): void {
    this.configSubscription?.unsubscribe();
  }
}
