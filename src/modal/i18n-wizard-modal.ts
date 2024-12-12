import { App, Modal, Setting } from 'obsidian';
import I18N from 'main';
import Url from 'src/url';
import { t } from 'src/lang/inxdex';

// ==============================
//          首次运行向导
// ==============================
export class WizardModal extends Modal {
    i18n: I18N;
    frame: HTMLIFrameElement;
    img: HTMLImageElement;
    html: HTMLElement;
    title: HTMLParagraphElement;
    version: HTMLParagraphElement;
    constructor(app: App, i18n: I18N) {
        super(app);
        this.i18n = i18n
    }

    public async Main() {
        const { contentEl } = this;
        // @ts-ignore
        const modalEl: HTMLElement = this.contentEl.parentElement;
        modalEl.addClass('i18n-wizard__container');
        this.contentEl.addClass("i18n-wizard__box");

        this.img = this.contentEl.doc.createElement("img");
        this.img.addClass('i18n-wizard__img');
        this.img.src = this.imgDate;
        this.contentEl.appendChild(this.img);

        this.title = this.contentEl.doc.createElement("p");
        this.title.addClass('i18n-wizard__title');
        this.title.innerHTML = 'Obsidian-I18N';
        this.contentEl.appendChild(this.title);
        
        this.version = this.contentEl.doc.createElement("p");
        this.version.addClass('i18n-wizard__version');
        this.version.innerHTML = `${t('向导_通用_版本')} ${this.i18n.manifest.version}`;
        this.contentEl.appendChild(this.version);

        const videoTutorial = new Setting(contentEl);
        videoTutorial.setName(t('向导_视频_标题'));
        videoTutorial.setDesc(t('向导_视频_描述'));
        videoTutorial.controlEl.createEl('button', { text: t('向导_通用_浏览'), cls: ['i18n-button', `i18n-button--${this.i18n.settings.I18N_BUTTON_TYPE}-primary`, `is-${this.i18n.settings.I18N_BUTTON_SHAPE}`] }, (el) => {
            el.addEventListener("click", async () => { window.open(Url.VIDEO_TUTORIAL); });
        });

        const documentationTutorial = new Setting(contentEl);
        documentationTutorial.setName(t('向导_文档_标题'));
        documentationTutorial.setDesc(t('向导_文档_描述'));
        documentationTutorial.controlEl.createEl('button', { text: t('向导_通用_浏览'), cls: ['i18n-button', `i18n-button--${this.i18n.settings.I18N_BUTTON_TYPE}-info`, `is-${this.i18n.settings.I18N_BUTTON_SHAPE}`] }, (el) => {
            el.addEventListener("click", async () => { window.open(Url.DOCUMENTATION_TUTORIAL); });
        });

        const qq = new Setting(contentEl);
        qq.setName(t('向导_QQ_标题'));
        qq.setDesc(t('向导_QQ_描述'));
        qq.controlEl.createEl('button', { text: t('向导_通用_加入'), cls: ['i18n-button', `i18n-button--${this.i18n.settings.I18N_BUTTON_TYPE}-info`, `is-${this.i18n.settings.I18N_BUTTON_SHAPE}`] }, (el) => {
            el.addEventListener("click", async () => { window.open(Url.QQ_GROUP); });
        });
    }

    async onOpen() { await this.Main() }
    async onClose() { this.contentEl.empty() }
    imgDate = `data:image/png;base64,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`
}