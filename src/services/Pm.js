var Pm = {
  /**
   * 提醒
   */
  alarm: function () {
    // var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    // var sheet = spreadsheet.getSheetByName(SCHEDULE_NAME)
    // if (sheet == null) {
    //   SpreadsheetApp.flush()
    //   return
    // }

    // var now = new Date()
    // var tasks = Schedule.getTasks()
    // tasks.forEach(function (data, index) {
    //   var dateCol = SCHEDULE_TABLE_HEAD.indexOf(SCHEDULE_DATE_TEXT)
    //   var date = data[dateCol]
    //   if (!Utils.isSameDate(date, now)) {
    //     return
    //   }
  
    //   var sendedCol = SCHEDULE_TABLE_HEAD.indexOf(SCHEDULE_SENDED_TEXT)
    //   var sended = data[sendedCol]
    //   if (sended === SCHEDULE_SENDED_FLAG) {
    //     return
    //   }
      
    //   var contentCol = SCHEDULE_TABLE_HEAD.indexOf(SCHEDULE_CONTENT_DATE)
    //   var content = data[contentCol]

    //   var success = WeChatRobot.sendMessage(content)
    //   if (success === true) {
    //     /**
    //      * 因为 index 由 0 开始,
    //      * 而顶部也包含 header
    //      * 因此 row = index + 1 + header.length
    //      */
    //     var row = index + 2
    //     sheet.getRange(row, 1).setValue(SCHEDULE_SENDED_FLAG)
    //   } else {
    //     var message = success
    //     Logger.log('错误:' + message)
    //   }
    // })
    
    // SpreadsheetApp.flush()
  },
}