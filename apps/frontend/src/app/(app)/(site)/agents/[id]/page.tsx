import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { AgentChat } from '@gitroom/frontend/components/agents/agent.chat';
export const metadata: Metadata = {
  title: 'Ameego Nexus - Agent',
  description: '',
};
export default async function Page() {
  return (
    <AgentChat />
  );
}
