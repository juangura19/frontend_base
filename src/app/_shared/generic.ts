import { Injectable } from '@angular/core';

@Injectable()
export class Generic {
    showInstall = false;

    setInstall(show: boolean) {
        this.showInstall = show;
    }
    getInstall() {
        return this.showInstall;
    }
}