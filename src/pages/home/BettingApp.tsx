import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Wallet, Users, Trophy, MessageSquare } from "lucide-react";

export default function BettingApp() {
  const [balance, setBalance] = useState(100.0);
  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Betting App</h1>
        <Badge variant="outline">Saldo: ${balance.toFixed(2)}</Badge>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="dashboard">
            <Wallet className="w-5 h-5" />
          </TabsTrigger>
          <TabsTrigger value="comunidad">
            <Users className="w-5 h-5" />
          </TabsTrigger>
          <TabsTrigger value="ranking">
            <Trophy className="w-5 h-5" />
          </TabsTrigger>
          <TabsTrigger value="chat">
            <MessageSquare className="w-5 h-5" />
          </TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2">Apostar</h2>
              <Input placeholder="Cantidad a apostar" type="number" className="mb-2" />
              <div className="flex justify-between">
                <Button variant="outline">1x1</Button>
                <Button variant="outline">Grupo</Button>
                <Button>Contra la casa</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comunidad */}
        <TabsContent value="comunidad">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2">Comunidades</h2>
              <p>Únete a una comunidad para apostar con amigos.</p>
              <Button className="mt-2">Explorar comunidades</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ranking */}
        <TabsContent value="ranking">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2">Ranking</h2>
              <ul>
                <li>🥇 Usuario1 - 10 victorias</li>
                <li>🥈 Usuario2 - 8 victorias</li>
                <li>🥉 Usuario3 - 7 victorias</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Chat */}
        <TabsContent value="chat">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2">Chat</h2>
              <p>Habla con otros jugadores y organiza apuestas.</p>
              <Button className="mt-2">Ir al chat</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
