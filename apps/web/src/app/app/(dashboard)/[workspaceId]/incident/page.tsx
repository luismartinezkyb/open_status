import * as React from "react";

import { Container } from "@/components/dashboard/container";
import { Header } from "@/components/dashboard/header";
import { wait } from "@/lib/utils";
import { api } from "@/trpc/server";

export default async function IncidentPage({
  params,
}: {
  params: { workspaceId: string };
}) {
  const incidents = await api.incident.getIncidentByWorkspace.query({
    workspaceId: Number(params.workspaceId),
  });
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      <Header title="Monitor" description="Overview of all the responses." />
      <Container title="Hello"></Container>
      <Container title="World"></Container>
    </div>
  );
}