export interface IItem {
  id: number,
  type: string,
  title: string,
  assignedTo: string,
  state: string,
  tags: string[],
  status: 'running' | 'blocked' | 'new'
}