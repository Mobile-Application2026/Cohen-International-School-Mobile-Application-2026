
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';

import {
  CHILDREN_DATA,
  BUS_TRACKING_DATA,
  HOSTEL_DATA,
  PARENT_PROFILE,
  MENTORS_DATA,
  MENTOR_MESSAGE,
  ChildData,
  BusTrackingData,
  HostelData,
  ParentProfile,
  MentorData,
  MentorMessage,
} from '../data/parentMockData';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ParentContextType {
  // -------------------------------------------------------------------------
  // Children
  // -------------------------------------------------------------------------

  children: ChildData[];

  selectedChildId: string | null;

  selectedChild: ChildData | null;

  selectChild: (childId: string) => void;

  // -------------------------------------------------------------------------
  // Parent Data
  // -------------------------------------------------------------------------

  parent: ParentProfile;

  updateParent: (updatedParent: ParentProfile) => void;

  // -------------------------------------------------------------------------
  // Bus Tracking
  // -------------------------------------------------------------------------

  busTracking: BusTrackingData;

  // -------------------------------------------------------------------------
  // Hostel
  // -------------------------------------------------------------------------

  hostel: HostelData;

  // -------------------------------------------------------------------------
  // Mentors
  // -------------------------------------------------------------------------

  mentors: MentorData[];

  // -------------------------------------------------------------------------
  // Mentor Message
  // -------------------------------------------------------------------------

  mentorMessage: MentorMessage;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ParentContext = createContext<
  ParentContextType | undefined
>(undefined);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface ParentProviderProps {
  children: ReactNode;
}

export const ParentProvider = ({
  children,
}: ParentProviderProps) => {

  // -------------------------------------------------------------------------
  // Parent Profile State
  // -------------------------------------------------------------------------

  const [parent, setParent] = useState<ParentProfile>(
    PARENT_PROFILE
  );

  // -------------------------------------------------------------------------
  // Update Parent Profile
  // -------------------------------------------------------------------------

  const updateParent = (
    updatedParent: ParentProfile
  ) => {
    setParent(updatedParent);
  };

  // -------------------------------------------------------------------------
  // Initially select the first child
  // -------------------------------------------------------------------------

  const [
    selectedChildId,
    setSelectedChildId,
  ] = useState<string | null>(
    CHILDREN_DATA.length > 0
      ? CHILDREN_DATA[0].id
      : null
  );

  // -------------------------------------------------------------------------
  // Find currently selected child
  // -------------------------------------------------------------------------

  const selectedChild = useMemo(() => {
    return (
      CHILDREN_DATA.find(
        (child) => child.id === selectedChildId
      ) ?? null
    );
  }, [selectedChildId]);

  // -------------------------------------------------------------------------
  // Change selected child
  // -------------------------------------------------------------------------

  const selectChild = (
    childId: string
  ) => {
    setSelectedChildId(childId);
  };

  // -------------------------------------------------------------------------
  // Context Value
  // -------------------------------------------------------------------------

  const value: ParentContextType = {

    // -----------------------------------------------------------------------
    // Children
    // -----------------------------------------------------------------------

    children: CHILDREN_DATA,

    selectedChildId,

    selectedChild,

    selectChild,

    // -----------------------------------------------------------------------
    // Parent Data
    // -----------------------------------------------------------------------

    parent,

    updateParent,

    // -----------------------------------------------------------------------
    // Bus Tracking
    // -----------------------------------------------------------------------

    busTracking: BUS_TRACKING_DATA,

    // -----------------------------------------------------------------------
    // Hostel
    // -----------------------------------------------------------------------

    hostel: HOSTEL_DATA,

    // -----------------------------------------------------------------------
    // Mentors
    // -----------------------------------------------------------------------

    mentors: MENTORS_DATA,

    // -----------------------------------------------------------------------
    // Mentor Message
    // -----------------------------------------------------------------------

    mentorMessage: MENTOR_MESSAGE,
  };

  // -------------------------------------------------------------------------
  // Provider
  // -------------------------------------------------------------------------

  return (
    <ParentContext.Provider value={value}>
      {children}
    </ParentContext.Provider>
  );
};

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export const useParent = () => {
  const context = useContext(ParentContext);

  if (!context) {
    throw new Error(
      'useParent must be used inside ParentProvider'
    );
  }

  return context;
};
