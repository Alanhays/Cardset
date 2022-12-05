"ui nodejs";
require('rhino').install();
const ui = require('ui');
const app = require('app');
const $java = $autojs.java;
const { getCardListData } = require('./modules/baidubceApi.node');
const { datastoreName, cardListKey } = require('./modules/config.node');
const { createDatastore } = require('datastore');
const datastore = createDatastore(datastoreName);

// 要使用Android原生界面&资源的特性，需要在project.json中加上androidResources属性
async function main() {
    // 初始化卡片数据
    // await initCardListData();
    // 加载Android资源
    await ui.loadAndroidResources();
    ui.setMainActivity(MainActivity);
}
main().catch(console.error);

async function initCardListData() {
    getCardListData.then(async function (response) {
        // if (response.data.state) {
        //     await datastore.set(cardListKey, response.data.data);
        // }

    });
}

class MainActivity extends ui.Activity {

    // 默认布局ID，对应于文件res/layout/activity_main
    get layoutId() {
        return ui.R.layout.activity_main;
    }

    constructor() {
        super();
        this.cardList = [{ title: '申请授权', image: 'https://pic.rmb.bdstatic.com/bjh/171cd6cf9e22e5a8ac1567725a71a8e4.jpeg' }];
    }

    async onCreate(savedInstanceState) {
        androidx.core.view.WindowCompat.setDecorFitsSystemWindows(this.getWindow(), false);
        // 应用主题
        this.getTheme().applyStyle(ui.R.style.MainTheme, true);
        super.onCreate(savedInstanceState);
        // this.cardList = await datastore.get(cardListKey)
    }

    onContentViewSet(view) {
        this._setupViewPager(view.findView('viewPager'), view.findView('navigation'));
        this._setupGrid(view.findView('grid'));
        this._setupScrapt(view.findView('scrapt'));
        this._setupCon(view.findView('con'));

        // view.findView('fab').setOnClickListener(() => {
        //     console.log('已勾选卡片:', this.cardList.filter(item => item.checked));
        //     const Snackbar = com.google.android.material.snackbar.Snackbar;
        //     Snackbar.make(view, "开始运行", 0)
        //         .setAnchorView(ui.R.id.fab)
        //         .setAction("取消", () => {
        //             console.log('已取消');
        //         }).show()
        // });
    }

    _setupViewPager(viewPager, navigation) {
        const bottomNavigationIds = [ui.R.id.navigation_dashboard, ui.R.id.navigation_log, ui.R.id.navigation_settings];
        viewPager.initAdapterFromChildren();
        // ViewPager和底部导航栏同步
        navigation.setOnItemSelectedListener((item) => {
            viewPager.setCurrentItem(bottomNavigationIds.indexOf(item.getItemId()));
            return true;
        })
        viewPager.addOnPageChangeListener(new androidx.viewpager.widget.ViewPager.OnPageChangeListener({
            onPageScrolled: (position, positionOffset, positionOffsetPixels) => {
            },
            onPageSelected: (position) => {
                navigation.setSelectedItemId(bottomNavigationIds[position])
            },
            onPageScrollStateChanged: (state) => {
            },
        }));
    }

    async _setupGrid(grid) {
        // 自定义ViewHolder
        const MyViewHolder = await $java.defineClass(
            class MyViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
                constructor(itemView) {
                    super(itemView);
                    itemView.setOnClickListener(() => {
                        const checked = !itemView.isChecked();
                        itemView.setChecked(checked);
                        this.item.checked = checked;
                    });
                    this.title = itemView.findView('title');
                    this.image = itemView.findView('image');
                }

                bind(item, position) {
                    this.title.setText(item.title);
                    ui.imageLoader.loadImageInto(this.image, item.image).catch(console.error);
                    this.itemView.setChecked(item.checked ?? false);
                    this.item = item;
                }
            }
        );
        // 自定义Adapter
        const MyAdapter = await $java.defineClass(
            class MyAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter {
                constructor(data) {
                    super();
                    this.data = data;
                }

                onCreateViewHolder(parent, viewType) {
                    return new MyViewHolder(android.view.LayoutInflater.from(parent.getContext())
                        .inflate(ui.R.layout.grid_main_item, parent, false));
                }

                onBindViewHolder(holder, position) {
                    holder.bind(this.data[position]);
                }

                getItemCount() {
                    return this.data.length;
                }
            }
        );
        // 设置为表格布局，列数为2
        const layoutManager = new androidx.recyclerview.widget.GridLayoutManager(this, 1);
        grid.setLayoutManager(layoutManager);
        grid.setAdapter(new MyAdapter(this.cardList));
    }

    async _setupScrapt(grid) {
        // 自定义ViewHolder
        const MyViewHolder = await $java.defineClass(
            class MyViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
                constructor(itemView) {
                    super(itemView);
                    itemView.setOnClickListener(() => {
                        const checked = !itemView.isChecked();
                        itemView.setChecked(checked);
                        this.item.checked = checked;
                    });
                    this.title = itemView.findView('title');
                    this.image = itemView.findView('image');
                }

                bind(item, position) {
                    this.title.setText(item.title);
                    ui.imageLoader.loadImageInto(this.image, item.image).catch(console.error);
                    this.itemView.setChecked(item.checked ?? false);
                    this.item = item;
                }
            }
        );
        // 自定义Adapter
        const MyAdapter = await $java.defineClass(
            class MyAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter {
                constructor(data) {
                    super();
                    this.data = data;
                }

                onCreateViewHolder(parent, viewType) {
                    return new MyViewHolder(android.view.LayoutInflater.from(parent.getContext())
                        .inflate(ui.R.layout.grid_scrapt_item, parent, false));
                }

                onBindViewHolder(holder, position) {
                    holder.bind(this.data[position]);
                }

                getItemCount() {
                    return this.data.length;
                }
            }
        );
        // 设置为表格布局，列数为2
        const layoutManager = new androidx.recyclerview.widget.GridLayoutManager(this, 2);
        grid.setLayoutManager(layoutManager);
        grid.setAdapter(new MyAdapter(this.cardList));
    }

    async _setupCon(grid) {
        // 自定义ViewHolder
        const MyViewHolder = await $java.defineClass(
            class MyViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
                constructor(itemView) {
                    super(itemView);
                    this.title = itemView.findView('title');
                    this.image = itemView.findView('image');
                }

                bind(item, position) {
                    this.title.setText(item.title);
                    ui.imageLoader.loadImageInto(this.image, item.image).catch(console.error);
                    this.itemView.setChecked(item.checked ?? false);
                    this.item = item;
                }
            }
        );
        // 自定义Adapter
        const MyAdapter = await $java.defineClass(
            class MyAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter {
                constructor(data) {
                    super();
                    this.data = data;
                }

                onCreateViewHolder(parent, viewType) {
                    return new MyViewHolder(android.view.LayoutInflater.from(parent.getContext())
                        .inflate(ui.R.layout.grid_con_item, parent, false));
                }

                onBindViewHolder(holder, position) {
                    holder.bind(this.data[position]);
                }

                getItemCount() {
                    return this.data.length;
                }
            }
        );
        // 设置为表格布局，列数为2
        const layoutManager = new androidx.recyclerview.widget.GridLayoutManager(this, 3);
        grid.setLayoutManager(layoutManager);
        grid.setAdapter(new MyAdapter(this.cardList));
    }

    onOptionsItemSelected(item) {
        switch (item.getItemId()) {
            case ui.R.id.action_abouts: {
                this._showMaterial3Alert("Abouts", "Node.js M3 Demo\nAuto.js Pro V9 With Node.js");
                break;
            }
            default:
                return super.onOptionsItemSelected(item)
        }
        return true;
    }

    _showMaterial3Alert(title, message) {
        const MaterialAlertDialogBuilder = com.google.android.material.dialog.MaterialAlertDialogBuilder;
        new MaterialAlertDialogBuilder(this)
            .setTitle(title)
            .setMessage(message)
            .setPositiveButton("OK", null)
            .show();
    }
}