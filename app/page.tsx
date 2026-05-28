// @ts-nocheck
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, UserPlus, LogIn, MessageCircle, Clock, Lock, Trophy, Image, CheckCircle, Users, Crown, Code, UserCog, Radio, Bell, XCircle, Eye } from "lucide-react";

export default function RevoltzSite() {
  const [view, setView] = useState("home");

  const roles = [
    { cargo: "Ceo", descricao: "Dono da guilda e fundador do site. Controla tudo, aprova membros e distribui cargos.", nivel: 6, icon: <Crown /> },
    { cargo: "Sub líder", descricao: "Segundo comando da guilda. Monitora blocos privados, envia mensagens e pode dar cargos.", nivel: 5, icon: <Shield /> },
    { cargo: "Gerente", descricao: "Ajuda na organização interna, acompanha metas, registros e membros ativos.", nivel: 4, icon: <UserCog /> },
    { cargo: "Moderador", descricao: "Monitora membros online, blocos privados, envia mensagens e pode dar cargos.", nivel: 3, icon: <Radio /> },
    { cargo: "Programador", descricao: "Responsável pela manutenção técnica do site, ajustes, correções e melhorias.", nivel: 2, icon: <Code /> },
    { cargo: "Membro", descricao: "Jogador comum da guilda. Vê apenas o próprio bloco e precisa bater metas.", nivel: 1, icon: <Users /> },
    { cargo: "Novato", descricao: "Usuário recém-chegado ou ainda em observação antes de virar membro oficial.", nivel: 0, icon: <UserPlus /> },
  ];

  const pendingRegistrations = [
    {
      nome: "ShadowRush",
      email: "shadowrush@email.com",
      telefone: "+55 63 99999-0000",
      id: "449912300",
      patente: "Diamante III",
      status: "Aguardando aprovação",
      data: "Hoje",
    },
    {
      nome: "NoobMaster",
      email: "noobmaster@email.com",
      telefone: "+55 63 98888-1111",
      id: "772245119",
      patente: "Platina IV",
      status: "Aguardando aprovação",
      data: "Hoje",
    },
  ];

  const players = [
    {
      nome: "Ghost",
      id: "77889900",
      patente: "Mestre",
      pontos: 1240,
      status: "Aprovado",
      registro: "registrado",
      cargo: "Programador",
      online: true,
      privado: true,
    },
    {
      nome: "Fantasma",
      id: "Não informado",
      patente: "Diamante IV",
      pontos: 320,
      status: "Em análise",
      registro: "sem registro",
      cargo: "Membro",
      online: true,
      privado: false,
    },
    {
      nome: "Ana",
      id: "55128890",
      patente: "Heroico",
      pontos: 1510,
      status: "Aprovado",
      registro: "registrado",
      cargo: "Membro",
      online: false,
      privado: true,
    },
    {
      nome: "Ana",
      id: "Não informado",
      patente: "Novato",
      pontos: 0,
      status: "Pendente",
      registro: "sem registro",
      cargo: "Membro",
      online: false,
      privado: false,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-red-900/40 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/40">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wide">REVOLTZ</h1>
              <p className="text-xs text-zinc-400">Guilda Free Fire</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <button onClick={() => setView("home")} className="hover:text-orange-400">Início</button>
            <button onClick={() => setView("registro")} className="hover:text-orange-400">Criar conta</button>
            <button onClick={() => setView("painel")} className="hover:text-orange-400">Painel</button>
            <button onClick={() => setView("online")} className="hover:text-orange-400">Online/Offline</button>
            <button onClick={() => setView("notificacoes")} className="hover:text-orange-400 relative">
              Notificações
              <span className="absolute -top-3 -right-4 bg-red-600 text-white text-[10px] rounded-full px-2 py-0.5">{pendingRegistrations.length}</span>
            </button>
            <a href="https://chat.whatsapp.com/IQTHEokiLbz4ioAyazXADW?s=sw&p=a&mlu=2" className="hover:text-green-400">Suporte WhatsApp</a>
          </nav>
        </div>
      </header>

      {view === "home" && (
        <main>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,.18),transparent_35%)]" />
            <div className="max-w-7xl mx-auto px-5 py-20 relative grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 border border-red-700/40 text-orange-300 text-sm mb-6">
                  <Users className="w-4 h-4" /> Recrutamento aberto
                </p>
                <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                  Entre para a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Revoltz</span>
                </h2>
                <p className="text-zinc-300 text-lg max-w-xl mb-8">
                  Site oficial da guilda para recrutamento, organização interna, análise de novos membros e painel privado de cada jogador.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => setView("registro")} className="px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-700 font-bold flex items-center justify-center gap-2 shadow-xl shadow-red-950/40">
                    <UserPlus className="w-5 h-5" /> Criar conta
                  </button>
                  <button onClick={() => setView("login")} className="px-6 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2">
                    <LogIn className="w-5 h-5" /> Entrar
                  </button>
                </div>
                <a href="https://chat.whatsapp.com/IQTHEokiLbz4ioAyazXADW?s=sw&p=a&mlu=2" className="mt-5 inline-flex items-center gap-2 text-green-400 hover:text-green-300">
                  <MessageCircle className="w-4 h-4" /> Suporte pelo grupo do WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-zinc-900/80 border border-red-900/40 rounded-[2rem] p-6 shadow-2xl shadow-red-950/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Fluxo do recrutamento</h3>
                  <Lock className="text-orange-400" />
                </div>
                <div className="space-y-4">
                  {[
                    ["1", "Criar conta", "E-mail, senha, ID e nome dentro do jogo."],
                    ["2", "Notificação para staff", "CEO, Sub líder e Moderador recebem aviso para analisar o cadastro."],
                    ["3", "Cargo automático", "Ao ser aprovado, o jogador recebe bloco privado e cargo Membro."],
                    ["4", "Aceitar ou recusar", "Staff visualiza os dados cadastrados e decide se libera o membro."],
                  ].map((item) => (
                    <div key={item[0]} className="flex gap-4 p-4 rounded-2xl bg-black/50 border border-zinc-800">
                      <div className="w-10 h-10 rounded-xl bg-red-700 flex items-center justify-center font-black">{item[0]}</div>
                      <div>
                        <h4 className="font-bold">{item[1]}</h4>
                        <p className="text-sm text-zinc-400">{item[2]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-6">
            <Feature icon={<Trophy />} title="Pontos no jogo" text="Cada jogador pode ter pontuação registrada pela staff." />
            <Feature icon={<Shield />} title="Patente e ID" text="Nome, ID, patente e dados de cadastro em um só lugar." />
            <Feature icon={<Lock />} title="Privacidade" text="Somente o dono, staff autorizada e o próprio jogador acessam o bloco." />
            <Feature icon={<Crown />} title="Sistema de patentes" text="Ceo, Sub líder, Gerente, Moderador, Programador, Membro e Novato com permissões diferentes." />
          </section>
        </main>
      )}

      {view === "registro" && <RegisterScreen />}
      {view === "login" && <LoginScreen />}
      {view === "painel" && <Dashboard players={players} roles={roles} />}
      {view === "online" && <OnlineList players={players} />}
      {view === "notificacoes" && <NotificationsPanel pendingRegistrations={pendingRegistrations} />}
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="p-6 rounded-[1.5rem] bg-zinc-900 border border-zinc-800 hover:border-orange-600/60 transition">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center mb-5">
        {React.cloneElement(icon, { className: "w-6 h-6" })}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{text}</p>
    </div>
  );
}

function RegisterScreen() {
  return (
    <section className="max-w-xl mx-auto px-5 py-16">
      <div className="bg-zinc-900 border border-red-900/40 rounded-[2rem] p-8 shadow-2xl shadow-red-950/30">
        <h2 className="text-3xl font-black mb-2">Criar conta</h2>
        <p className="text-zinc-400 mb-8">Depois do cadastro, sua conta entra em fila de espera para aprovação da staff.</p>
        <form className="space-y-4">
          <Input label="E-mail" type="email" placeholder="seuemail@gmail.com" />
          <Input label="Senha" type="password" placeholder="Crie uma senha segura" />
          <Input label="WhatsApp obrigatório" type="tel" placeholder="Ex: +55 63 99999-0000" required />
          <Input label="ID dentro do Free Fire" placeholder="Ex: 123456789" />
          <Input label="Nome dentro do jogo" placeholder="Ex: REVOLTZ Ghost" />
          <button type="button" className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-700 font-bold mt-4">
            Enviar cadastro para análise da staff
          </button>
        </form>
        <a href="https://chat.whatsapp.com/IQTHEokiLbz4ioAyazXADW?s=sw&p=a&mlu=2" className="mt-6 flex justify-center items-center gap-2 text-green-400">
          <MessageCircle className="w-4 h-4" /> Grupo de suporte no WhatsApp
        </a>
      </div>
    </section>
  );
}

function LoginScreen() {
  return (
    <section className="max-w-xl mx-auto px-5 py-16">
      <div className="bg-zinc-900 border border-red-900/40 rounded-[2rem] p-8">
        <h2 className="text-3xl font-black mb-8">Entrar</h2>
        <form className="space-y-4">
          <Input label="E-mail" type="email" placeholder="seuemail@gmail.com" />
          <Input label="Senha" type="password" placeholder="Sua senha" />
          <button type="button" className="w-full py-4 rounded-2xl bg-white text-black font-bold">
            Acessar painel
          </button>
        </form>
      </div>
    </section>
  );
}

function Dashboard({ players, roles }) {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      <div className="mb-8">
        <h2 className="text-4xl font-black mb-2">Painel interno</h2>
        <p className="text-zinc-400">Área para staff acompanhar registros, pontos, cargos e blocos privados dos membros.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {roles.map((role) => (
          <div key={role.cargo} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center mb-3">
              {React.cloneElement(role.icon, { className: "w-5 h-5" })}
            </div>
            <h3 className="font-black">{role.cargo}</h3>
            <p className="text-xs text-zinc-400 mt-2">{role.descricao}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.id} className="bg-zinc-900 border border-zinc-800 rounded-[1.5rem] p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-2xl font-black">{player.nome}</h3>
                <p className="text-sm text-zinc-400">ID: {player.id}</p>
              </div>
              {player.status === "Aprovado" ? <CheckCircle className="text-green-400" /> : <Clock className="text-orange-400" />}
            </div>
            <div className="space-y-3 text-sm">
              <Info label="Patente" value={player.patente} />
              <Info label="Cargo no site" value={player.cargo} />
              <Info label="Pontos" value={player.pontos} />
              <Info label="Registro" value={player.registro} />
              <Info label="Status" value={player.status} />
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-black/50 border border-red-900/30">
              <div className="flex items-center gap-2 font-bold mb-2"><Lock className="w-4 h-4 text-orange-400" /> Bloco privado</div>
              <p className="text-zinc-400 text-sm mb-4">Chat e imagens liberados apenas para jogador, dono e staff autorizada.</p>
              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-xl bg-red-700 font-bold">Chat</button>
                <button className="p-3 rounded-xl bg-zinc-800"><Image className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NotificationsPanel({ pendingRegistrations }) {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black mb-2">Notificações de cadastro</h2>
          <p className="text-zinc-400">Área visível apenas para CEO, Sub líder e Moderador analisarem novos registros.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-950/40 border border-red-800/50">
          <Bell className="w-5 h-5 text-orange-400" />
          <span className="font-bold">{pendingRegistrations.length} pendentes</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {pendingRegistrations.map((user) => (
          <div key={user.id} className="bg-zinc-900 border border-red-900/40 rounded-[1.5rem] p-6 shadow-xl shadow-red-950/20">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold mb-3">
                  <Bell className="w-3 h-3" /> Novo cadastro
                </p>
                <h3 className="text-2xl font-black">{user.nome}</h3>
                <p className="text-sm text-zinc-400">{user.status} • {user.data}</p>
              </div>
              <Eye className="text-orange-400" />
            </div>

            <div className="space-y-3 text-sm mb-6">
              <Info label="E-mail" value={user.email} />
              <Info label="WhatsApp" value={user.telefone} />
              <Info label="ID Free Fire" value={user.id} />
              <Info label="Patente" value={user.patente} />
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-zinc-800 mb-5">
              <h4 className="font-bold mb-2">Regra automática</h4>
              <p className="text-sm text-zinc-400">
                Se o cadastro for aceito, o usuário recebe automaticamente o cargo Membro e um bloco privado. Se for recusado, ele não ganha acesso interno.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 rounded-xl bg-green-600 hover:bg-green-500 font-bold flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" /> Aceitar cadastro
              </button>
              <button className="py-3 rounded-xl bg-red-700 hover:bg-red-600 font-bold flex items-center justify-center gap-2">
                <XCircle className="w-5 h-5" /> Recusar cadastro
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OnlineList({ players }) {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black mb-2">Lista online/offline</h2>
          <p className="text-zinc-400">Controle rápido de presença, registro e cargo dos usuários no site.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800">
          <Radio className="w-5 h-5 text-green-400" />
          <span className="font-bold">{players.filter((p) => p.online).length} online</span>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-900">
        <table className="w-full text-left">
          <thead className="bg-black text-zinc-300 text-sm">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Nome</th>
              <th className="p-4">Presença</th>
              <th className="p-4">Registro</th>
              <th className="p-4">Cargo</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={`${player.nome}-${index}`} className="border-t border-zinc-800">
                <td className="p-4 text-zinc-500">{index + 1}</td>
                <td className="p-4 font-bold">{player.nome}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${player.online ? "bg-green-500/15 text-green-400" : "bg-zinc-700 text-zinc-300"}`}>
                    {player.online ? "online" : "offline"}
                  </span>
                </td>
                <td className="p-4 text-zinc-300">{player.registro}</td>
                <td className="p-4 text-orange-400 font-bold">{player.cargo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-zinc-300">{label}</span>
      <input {...props} className="mt-2 w-full px-4 py-4 rounded-2xl bg-black border border-zinc-800 focus:border-orange-500 outline-none text-white" />
    </label>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between p-3 rounded-xl bg-black/40 border border-zinc-800">
      <span className="text-zinc-400">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
