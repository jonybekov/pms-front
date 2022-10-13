import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useDidUpdate } from "@mantine/hooks";
import { Button } from "@mantine/core";
import Draggable from "react-draggable";

interface Col {
  label: string;
  key: number;
  date: Dayjs;
}

interface Row {
  label: string;
  id: string;
}

interface Record {
  id: string;
  rowId: Row["id"];
  label: string;
  time: {
    start: number;
    end: number;
  };
}

function generateDays(count: number, start?: Dayjs): Col[] {
  const cols: Col[] = [];
  let i = 0;

  while (i < count - 1) {
    const newDate = dayjs(start).add(i, "day");

    cols.push({
      label: newDate.format("DD"),
      key: newDate.unix(),
      date: newDate,
    });

    i++;
  }

  return cols;
}

const defaultRows: Row[] = [
  {
    id: "1",
    label: "Room 1",
  },
  {
    id: "2",
    label: "Room 2",
  },
  {
    id: "3",
    label: "Room 3",
  },
  {
    id: "4",
    label: "Room 4",
  },
];

function Timeline({ rows, days }: { rows: Row[]; days: Col[] }) {
  const [items, setItems] = useState<Record[]>([
    {
      id: "1",
      label: "Some data",
      rowId: "1",
      time: {
        start: dayjs().add(2, "day").valueOf(),
        end: dayjs().add(5, "day").valueOf(),
      },
    },
  ]);

  const [draggedItemIds, setDraggedItemIds] = useState<string[] | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <div className="gantt" style={{ position: "relative", overflow: "hidden" }}>
      {/* <div className="grid" style={{ pointerEvents: "none" }}>
        {rows.map((row) => (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              height: 35,
            }}
          >
            {days.map((day) => (
              <div
                style={{
                  border: "1px solid #ccc",
                  flex: "1 0 50px",
                  height: "100%",
                  pointerEvents: "all",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div> */}

      {rows.map((row) => {
        return (
          <div
            key={row.id}
            style={{
              width: "100%",
              backgroundColor: "#ccc",
              borderBottom: "1px solid #555",
              height: 35,
              pointerEvents: "none",
            }}
          >
            {items
              .filter((item) => item.rowId === row.id)
              .map((item) => (
                <Draggable bounds="parent" key={item.id} grid={[50, 35]}>
                  <div
                    style={{
                      backgroundColor: "green",
                      width: 150,
                      height: "100%",
                      userSelect: "none",
                      pointerEvents: "all",
                    }}
                  />
                </Draggable>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export function GanttCalendar() {
  const [daysCount, setDaysCount] = useState<number>(50);
  const [startDate, setStartDate] = useState<Dayjs>(() => dayjs());
  const [days, setDays] = useState<Col[]>(() =>
    generateDays(daysCount, startDate)
  );
  const [rows, setRows] = useState<Row[]>(defaultRows);

  useDidUpdate(() => {
    const newDays = generateDays(daysCount, startDate);
    setDays(newDays);
  }, [startDate, daysCount]);

  return (
    <>
      <div>
        <Button onClick={() => setStartDate(startDate.subtract(1, "day"))}>
          Prev
        </Button>
        <Button onClick={() => setStartDate(startDate.add(1, "day"))}>
          Next
        </Button>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", borderTop: "1px solid #ccc" }}>
          {days.map((day) => {
            return (
              <div
                key={day.key}
                style={{
                  flex: "1 0 50px",
                  borderLeft: "1px solid #ccc",
                  padding: 10,
                }}
              >
                {day.label}
              </div>
            );
          })}
        </div>
        <Timeline rows={rows} days={days} />
      </div>
    </>
  );
}
