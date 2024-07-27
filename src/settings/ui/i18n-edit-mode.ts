import { Setting } from "obsidian";
import BaseSetting from "./base-setting";

// 自动更新
export default class I18nEditMode extends BaseSetting {
    main(): void {
        const i18nEditMode = new Setting(this.containerEl);
        i18nEditMode.setName("译文编辑(暂未完成)");
        i18nEditMode.setDesc("是否开启译文编辑功能");
        i18nEditMode.addToggle(cb => cb
            .setValue(this.settings.I18N_EDIT_MODE)
            .onChange(() => {
                this.settings.I18N_EDIT_MODE = !this.settings.I18N_EDIT_MODE;
                this.i18n.saveSettings();
                this.settingTab.display();
            })
        );
    }
}