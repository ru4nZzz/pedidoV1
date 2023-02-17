import tkinter as tk
import random

root = tk.Tk()
root.geometry('400x400')

def houver(event):
	x = random.radint(0, 250)
	y = random.radint(0, 250)
	nao.place(x=x, y=y)

	def mensagem():
		message = tk.Label(root, text='Te amo makk S2')
		message.place(x=70, y=150, relx=0, rely=0)

		pergunta = tk.Label(root, text='Quer namorar cmg??')
		pergunta.pack(anchor='n', pady=20)

		nao = tk.Button(root, text='Não')
		nao.place(x=140, y=80)
		nao.bind('<enter>', houver)

		sim =tk.Button(root, text='Sim', command=mensagem)
		sim.place(x=25, y=80, relx=0, rely=0)

		root.mainloop()