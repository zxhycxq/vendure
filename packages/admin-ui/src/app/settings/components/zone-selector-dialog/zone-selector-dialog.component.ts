import { Component } from '@angular/core';

import { GetZones } from '../../../common/generated-types';
import { Dialog } from '../../../shared/providers/modal/modal.service';

@Component({
    selector: 'vdr-zone-selector-dialog',
    templateUrl: './zone-selector-dialog.component.html',
    styleUrls: ['./zone-selector-dialog.component.scss'],
})
export class ZoneSelectorDialogComponent implements Dialog<GetZones.Zones | { name: string } | string> {
    allZones: GetZones.Zones[];
    canCreateNewZone = false;
    resolveWith: (result?: GetZones.Zones | { name: string } | string) => void;
    selected: any;

    onChange(e) {
        this.selected = e;
    }

    select() {
        this.resolveWith(this.selected);
    }

    cancel() {
        this.resolveWith();
    }
}
