id("tv_date").waitFor()

id("rl_operation").findOne().click()

id("tv_btb_tips").className("android.widget.TextView").text("下载").waitFor()

id("tv_btb_tips").className("android.widget.TextView").text("下载").findOne().parent().click()

id("transfer_list_layout").findOne().click()

id("transfer_list").findOne().parent().click()

    id("tab_title").className("android.widget.TextView").text("下载").findOne().click()

    id("transfer_list_layout").findOne().click()

    id("tv_upload_time").className("android.widget.TextView").text("下载到：手机/M_Cloud/download").waitFor()

    

// id("tab_title").className("android.widget.TextView").text("下载").findOne().parent().click()

//     id("ll_download_count").findOne().click()


//     id("tv_item_select").waitFor()

//     id("tv_item_select").findOne().click()

//     id("all_item_select").findOne().click()

//     className("android.widget.TextView").text("删除").waitFor()

//     id("tvDelete").findOne().click()

//     id("bn_left").findOne().click()


//     id("transfer_no_data_text").waitFor()

//     id("btn_back").findOne().click()

//     id("tv_upload_time").className("android.widget.TextView").text("下载到：手机/M_Cloud/download").waitFor()

//     sleep(500)
//     click(1000, 1060)

//     id("delete_ll").findOne().click()

//     id("bn_left").findOne().click()

//     id("transfer_no_data_text").waitFor()

//     id("btn_back").findOne().click()
