import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Close } from '@nutui/icons-react-taro'
import { Dialog, Cell, Image } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  noTitle: string
  tipDialog: string
  title: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
  content: string
  tips: string
  confirmText: string
  cancelText: string
  header: string
  closeIcon: string
  customClose: string
  customContent: string
  customContentText: string
  confirmLoading: string
}

const DialogDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础弹框',
      noTitle: '无标题弹框、不锁背景滚动',
      tipDialog: '提示弹框',
      tips: '提示',
      title: '底部按钮 垂直布局 使用',
      title1: '标签式使用',
      title2: '无底部 Footer 区域',
      title3: '底部 Footer 为 Button 时，点击遮罩不关闭',
      title4: '打开弹框 3s 后调用关闭方法',
      title5: '打开弹框 3s 后更新弹框内容',
      title6: '点击取消时，拦截',
      content: '支持函数调用和组件调用两种方式。',
      confirmText: '确定',
      cancelText: '取消',
      header: '顶部带插图',
      closeIcon: '顶部带关闭按钮',
      customClose: '自定义底部关闭按钮',
      customContent: '自定义内容区域',
      customContentText:
        '文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容',
      confirmLoading: '确认按钮loading效果',
    },
    'en-US': {
      basic: 'Basic Usage',
      noTitle: 'No Title',
      tipDialog: 'Tips Dialog',
      tips: 'Tips',
      title: 'Bottom button vertical use',
      title1: 'Template use',
      title2: 'no Footer',
      title3: 'Footer Button, and does not close when click overlay',
      title4: 'after opened the dialog for 3 seconds, call close method',
      title5:
        'after opened the dialog for 3 seconds, update the content of the dialog',
      title6: 'Stop it when click cancel button',
      content: 'Function call and template call are supported.',
      confirmText: 'confirm',
      cancelText: 'cancel',
      header: 'Top with illustration',
      closeIcon: 'Top with close button',
      customClose: 'Customize the bottom close button',
      customContent: 'Customize the content area',
      customContentText:
        'Text content text content text content text content text content text content text content text content text content.',
      confirmLoading: 'Confirm button loading effect',
    },
  })

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visible8, setVisible8] = useState(false)
  const [visible9, setVisible9] = useState(false)
  const [visible10, setVisible10] = useState(false)
  const [visible11, setVisible11] = useState(false)
  const [visible12, setVisible12] = useState(false)

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>函数调用</h2>
        <Dialog id="test" />
        <Cell
          title="函数调用"
          onClick={() =>
            Dialog.open('test', {
              className: 'dialog-func',
              title: '函数调用',
              content: '可通过 Dialog.open 打开对话框',
              onConfirm: () => {
                Dialog.close('test')
              },
              onCancel: () => {
                Dialog.close('test')
              },
            })
          }
        />
        <h2>{translated.title1}</h2>
        <Cell title={translated.basic} onClick={() => setVisible1(true)} />
        <Dialog
          className="dialog-tag"
          title={translated.title1}
          visible={visible1}
          onConfirm={() => setVisible1(false)}
          onCancel={() => setVisible1(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.noTitle} onClick={() => setVisible2(true)} />
        <Dialog
          visible={visible2}
          lockScroll={false}
          onConfirm={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.tipDialog} onClick={() => setVisible3(true)} />
        <Dialog
          title={translated.title1}
          visible={visible3}
          confirmText={translated.confirmText}
          hideCancelButton
          onConfirm={() => setVisible3(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title} onClick={() => setVisible4(true)} />
        <Dialog
          title={translated.title1}
          visible={visible4}
          footerDirection="vertical"
          onConfirm={() => setVisible4(false)}
          onCancel={() => setVisible4(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title3} onClick={() => setVisible5(true)} />
        <Dialog
          title={translated.title3}
          visible={visible5}
          footerDirection="vertical"
          closeOnOverlayClick={false}
          onConfirm={() => setVisible5(false)}
          onCancel={() => setVisible5(false)}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title2} onClick={() => setVisible6(true)} />
        <Dialog
          title={translated.title2}
          visible={visible6}
          footer={null}
          onClose={() => {
            setVisible6(false)
          }}
        >
          {translated.content}
        </Dialog>
        <Cell title={translated.title6} onClick={() => setVisible7(true)} />
        <Dialog
          title={translated.title2}
          visible={visible7}
          closeOnOverlayClick={false}
          beforeCancel={() => {
            console.log('stop close')
            return false
          }}
          onClose={() => {
            setVisible7(false)
          }}
        >
          {translated.content}
        </Dialog>
        <Cell
          title={translated.header}
          onClick={() => {
            setVisible8(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title={translated.header}
          visible={visible8}
          header={
            <div style={{ height: '166px' }}>
              <Image
                src="https://img13.360buyimg.com/imagetools/jfs/t1/219330/27/30033/11784/6544af3fF5c0fd98f/64c41bb05ef09189.png"
                mode="aspectFit"
              />
            </div>
          }
          onConfirm={() => setVisible8(false)}
          onCancel={() => setVisible8(false)}
        >
          {translated.content}
        </Dialog>
        <Cell
          title={translated.closeIcon}
          onClick={() => {
            setVisible9(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title={translated.closeIcon}
          visible={visible9}
          closeIcon
          onConfirm={() => setVisible9(false)}
          onCancel={() => setVisible9(false)}
        >
          {translated.content}
        </Dialog>
        <Cell
          title={translated.customClose}
          onClick={() => {
            setVisible10(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title={translated.customClose}
          visible={visible10}
          closeIcon={<Close width="24px" height="24px" />}
          closeIconPosition="bottom"
          onConfirm={() => setVisible10(false)}
          onCancel={() => setVisible10(false)}
          style={{
            '--nutui-dialog-close-color': '#FFFFFF',
          }}
        >
          {translated.content}
        </Dialog>
        <Cell
          title={translated.customContent}
          onClick={() => {
            setVisible11(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title={translated.customContent}
          visible={visible11}
          onConfirm={() => setVisible11(false)}
          onCancel={() => setVisible11(false)}
        >
          <>
            <div>{translated.customContentText}</div>
            <div
              style={{
                height: '96px',
                borderRadius: '8px',
                marginTop: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F8F8F8',
                color: '#BFBFBF',
              }}
            >
              {translated.customContent}
            </div>
          </>
        </Dialog>
        <Cell
          title={translated.confirmLoading}
          onClick={() => {
            setVisible12(true)
          }}
        />
        <Dialog
          className="test-dialog"
          title={translated.confirmLoading}
          visible={visible12}
          onConfirm={async () => {
            const wait = () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve(0)
                }, 3000)
              })
            }
            await wait()
            setVisible12(false)
          }}
          onCancel={() => setVisible12(false)}
          style={{
            '--nutui-dialog-close-color': '#FFFFFF',
          }}
        >
          {translated.content}
        </Dialog>
      </div>
    </>
  )
}

export default DialogDemo
